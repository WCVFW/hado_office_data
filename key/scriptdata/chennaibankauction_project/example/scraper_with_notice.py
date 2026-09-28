import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
import pandas as pd
from bs4 import BeautifulSoup
import re
import time
import os
import json

BASE_API = "https://chennaibankauction.com/wp-json/wp/v2/posts"
MEDIA_API = "https://chennaibankauction.com/wp-json/wp/v2/media"

FILES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "files")
ILLEGAL_XML_CHARS_RE = re.compile(r'[\x00-\x08\x0b\x0c\x0e-\x1F\uD800-\uDFFF\uFFFE\uFFFF]')

def clean_text(v):
    if not isinstance(v, str):
        return v
    return ILLEGAL_XML_CHARS_RE.sub('', v)

if not os.path.exists(FILES_DIR):
    os.makedirs(FILES_DIR)

print("Initializing Browser for Rocket Speed scraping...", flush=True)
options = uc.ChromeOptions()
options.add_argument('--headless')
driver = uc.Chrome(options=options, version_main=149)

def fetch_page_with_media(page):
    """
    Fetches the posts and then concurrently fetches their media using JavaScript 
    inside the browser to bypass Cloudflare and achieve rocket speed.
    """
    url = f"{BASE_API}?per_page=100&page={page}&_embed=1"
    driver.get(url)
    time.sleep(3) # Wait for initial load
    
    # JavaScript to parse the current JSON page, find IDs, and concurrently fetch media
    js_script = """
    var callback = arguments[arguments.length - 1];
    try {
        var posts = JSON.parse(document.body.innerText);
        if (!Array.isArray(posts)) {
            callback({error: "Not a valid posts array", data: posts});
            return;
        }
        
        var fetchPromises = posts.map(post => {
            return fetch('/wp-json/wp/v2/media?per_page=100&parent=' + post.id)
                .then(res => res.json())
                .then(mediaArr => {
                    let noticeUrl = "Not Mentioned";
                    let imageUrl = "Not Mentioned";
                    let pingStatus = "Not Mentioned";
                    
                    if (Array.isArray(mediaArr) && mediaArr.length > 0) {
                        // Find PDF and Image
                        for(let m of mediaArr) {
                            if (m.guid && m.guid.rendered) {
                                let lowerUrl = m.guid.rendered.toLowerCase();
                                if (lowerUrl.includes('.pdf')) {
                                    noticeUrl = m.guid.rendered;
                                } else if (lowerUrl.includes('.jpg') || lowerUrl.includes('.jpeg') || lowerUrl.includes('.png')) {
                                    if (imageUrl === "Not Mentioned") { // take first image
                                        imageUrl = m.guid.rendered;
                                        pingStatus = m.ping_status || "Not Mentioned";
                                    }
                                }
                            }
                        }
                        
                        // Fallbacks
                        if(noticeUrl === "Not Mentioned" && mediaArr[0].guid && mediaArr[0].guid.rendered && !mediaArr[0].guid.rendered.toLowerCase().match(/\.(jpg|jpeg|png)$/)) {
                            noticeUrl = mediaArr[0].guid.rendered;
                        }
                        if(imageUrl === "Not Mentioned" && mediaArr[0].guid && mediaArr[0].guid.rendered && mediaArr[0].guid.rendered.toLowerCase().match(/\.(jpg|jpeg|png)$/)) {
                            imageUrl = mediaArr[0].guid.rendered;
                            pingStatus = mediaArr[0].ping_status || "Not Mentioned";
                        }
                    }
                    post.sale_notice_url = noticeUrl;
                    post.media_image_url = imageUrl;
                    post.media_ping_status = pingStatus;
                    return post;
                })
                .catch(err => {
                    post.sale_notice_url = "Not Mentioned";
                    post.media_image_url = "Not Mentioned";
                    post.media_ping_status = "Not Mentioned";
                    return post;
                });
        });
        
        Promise.all(fetchPromises).then(results => {
            callback({error: null, data: results});
        });
        
    } catch(e) {
        callback({error: e.toString(), data: null});
    }
    """
    
    print(f"Fetching posts and media concurrently for page {page}...", flush=True)
    driver.set_script_timeout(30)
    result = driver.execute_async_script(js_script)
    
    if result and result.get("error"):
        print(f"[!] Error on page {page}: {result['error']}")
        return None
        
    return result.get("data")

def parse_property(post):
    # Clean HTML out of full_description_
    full_desc = post.get("acf", {}).get("full_description_", "")
    if full_desc:
        try:
            full_desc = BeautifulSoup(full_desc, "lxml").get_text(" ", strip=True)
        except:
            pass

    # Extract taxonomy terms from _embedded
    taxonomies = {
        "property_type": "Not Mentioned",
        "bank_name": "Not Mentioned",
        "district": "Not Mentioned",
        "location": "Not Mentioned",
        "possession_status": "Not Mentioned"
    }
    
    try:
        terms_arrays = post.get("_embedded", {}).get("wp:term", [])
        for term_array in terms_arrays:
            for term in term_array:
                tax = term.get("taxonomy")
                if tax in taxonomies:
                    taxonomies[tax] = term.get("name")
    except:
        pass

    row = {
        "Post ID": post.get("id"),
        "Title": post.get("title", {}).get("rendered"),
        "Property Type": taxonomies["property_type"],
        "Bank / Institution": taxonomies["bank_name"],
        "District": taxonomies["district"],
        "Location": taxonomies["location"],
        "Possession Status": taxonomies["possession_status"],
        "Property URL": post.get("link"),
        "Short Note": post.get("acf", {}).get("short_note"),
        "Property Description": full_desc,
        "Ping Status": post.get("media_ping_status", "Not Mentioned")
    }
    
    # Use the media_image_url we got directly from the media JSON (guid.rendered)
    image_url = post.get("media_image_url", "Not Mentioned")
    if image_url == "Not Mentioned":
        # Fallback to _embedded if it didn't find any attached media
        try:
            image_url = post["_embedded"]["wp:featuredmedia"][0]["source_url"]
        except:
            image_url = ""
            
    # Sale notice extraction with fallback
    sale_notice = post.get("sale_notice_url", "Not Mentioned")
    
    html_content = post.get("content", {}).get("rendered", "")
    soup = BeautifulSoup(html_content, "lxml")
    
    # FALLBACK: If Javascript didn't find the PDF in media attachments, 
    # it might be embedded directly as a hyperlink in the content!
    if sale_notice == "Not Mentioned":
        for a in soup.find_all("a", href=True):
            href = a["href"]
            text_lower = a.get_text(strip=True).lower()
            if ".pdf" in href.lower() or ("download" in text_lower and "sale notice" in text_lower):
                from urllib.parse import urljoin
                sale_notice = urljoin(post.get("link", ""), href)
                break

    result = {
        "Reserve Price": "",
        "EMD Amount": "",
        "Auction Date": "",
        "EMD Submission Date": "",
        "Borrower Name": "",
        "Contact Details": "",
        "Property Image URL": image_url,
        "Sale Notice URL": sale_notice,
    }

    try:
        text = soup.get_text(" ", strip=True)

        patterns = {
            "Reserve Price": r"Reserve Price\s*₹?\s*([\d,]+)",
            "EMD Amount": r"EMD Amount\s*₹?\s*([\d,]+)",
            "Auction Date": r"Auction Date\s*(\d{2}/\d{2}/\d{4})",
            "EMD Submission Date": r"EMD Submission Date\s*(\d{2}/\d{2}/\d{4})",
            "Borrower Name": r"Borrower Name\s*(.+?)\s*Contact Details",
            "Contact Details": r"Contact Details\s*(.+)"
        }

        for field, pattern in patterns.items():
            m = re.search(pattern, text, re.I)
            if m:
                result[field] = m.group(1).strip()
    except:
        pass

    row.update(result)
    return row

if __name__ == "__main__":
    print("Starting Rocket Speed download for ALL properties...", flush=True)
    
    all_rows = []
    
    # Fetch from page 1 to a very high number (breaks automatically when no more data)
    for page in range(1, 1000):
        posts = fetch_page_with_media(page)
        if not posts:
            print(f"[!] No more properties found. Stopping at page {page}.")
            break
            
        for post in posts:
            raw_row = parse_property(post)
            cleaned_row = {k: clean_text(v) for k, v in raw_row.items()}
            all_rows.append(cleaned_row)
            
    df = pd.DataFrame(all_rows)
    filename = "ChennaiBankAuction_RocketSpeed_ALL_PROPERTIES.xlsx"
    df.to_excel(filename, index=False)
    print(f"Saved {len(all_rows)} properties to {filename} successfully!", flush=True)

    driver.quit()
