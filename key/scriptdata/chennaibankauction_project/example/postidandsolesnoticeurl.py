import undetected_chromedriver as uc
import requests
import pandas as pd
import time
import os
import concurrent.futures

print("Bypassing Cloudflare Security...", flush=True)
options = uc.ChromeOptions()
options.add_argument('--headless')
driver = uc.Chrome(options=options, version_main=149)

driver.get("https://chennaibankauction.com")
time.sleep(5)

# Extract cookies and user-agent
cookies = {c['name']: c['value'] for c in driver.get_cookies()}
user_agent = driver.execute_script("return navigator.userAgent")
driver.quit()

print("Cloudflare bypassed successfully! Starting Multi-threaded requests...", flush=True)

session = requests.Session()
session.headers.update({"User-Agent": user_agent})
requests.utils.add_dict_to_cookiejar(session.cookies, cookies)

from bs4 import BeautifulSoup
from urllib.parse import urljoin

def fetch_media_for_post(post_data):
    post_id = post_data["id"]
    html_content = post_data["html"]
    post_link = post_data["link"]
    
    final_url = "Not Mentioned"
    
    try:
        url = f"https://chennaibankauction.com/wp-json/wp/v2/media?per_page=100&parent={post_id}"
        
        # Retry loop to prevent missing URLs due to server overload
        for attempt in range(3):
            r = session.get(url, timeout=15)
            if r.status_code == 200:
                media_arr = r.json()
                urls = []
                for m in media_arr:
                    guid = m.get("guid", {}).get("rendered", "")
                    if guid:
                        urls.append(guid)
                
                if urls:
                    final_url = " , ".join(urls)
                break # Success, exit retry loop
            else:
                import time
                time.sleep(2) # Wait before retry
                
    except:
        pass

    # FALLBACK: Check if there's a hyperlink in the HTML text itself
    soup = BeautifulSoup(html_content, "lxml")
    for a in soup.find_all("a", href=True):
        href = a["href"]
        text_lower = a.get_text(strip=True).lower()
        if ".pdf" in href.lower() or ("download" in text_lower and "sale notice" in text_lower) or ".jpg" in href.lower() or ".png" in href.lower():
            pdf_link = urljoin(post_link, href)
            # Make sure we don't duplicate a URL that was already found in the media API
            if final_url == "Not Mentioned":
                final_url = pdf_link
            elif pdf_link not in final_url:
                final_url = final_url + " , " + pdf_link
                
    return {"Property ID": post_id, "Sale Notice URL": final_url}

if __name__ == "__main__":
    all_data = []
    
    # 1. Fetch all posts concurrently
    print("Fetching all post IDs and HTML content...", flush=True)
    posts_data = []
    
    def fetch_page(page):
        try:
            r = session.get(f"https://chennaibankauction.com/wp-json/wp/v2/posts?per_page=100&page={page}", timeout=15)
            if r.status_code == 200:
                return [
                    {
                        "id": p["id"],
                        "html": p.get("content", {}).get("rendered", ""),
                        "link": p.get("link", "")
                    }
                    for p in r.json()
                ]
        except:
            pass
        return []

    # Fetch up to 85 pages concurrently (since there are 81 pages)
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        results = executor.map(fetch_page, range(1, 85))
        for res in results:
            posts_data.extend(res)
            
    print(f"Found {len(posts_data)} Properties. Launching Multi-Threading Engine...", flush=True)
    
    # 2. Fetch Media APIs concurrently with 5 threads (safe speed)
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        futures = {executor.submit(fetch_media_for_post, post_data): post_data for post_data in posts_data}
        
        # Simple progress tracking
        completed = 0
        for future in concurrent.futures.as_completed(futures):
            all_data.append(future.result())
            completed += 1
            if completed % 50 == 0:
                print(f"Processed {completed} / {len(posts_data)} properties...")

    if all_data:
        df = pd.DataFrame(all_data)
        filename = "PropertyID_and_SaleNoticeURL.xlsx"
        df.to_excel(filename, index=False)
        print(f"Success! {len(all_data)} properties saved to {filename} at lightning speed!")
    else:
        print("No data extracted.")
