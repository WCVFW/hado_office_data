import requests
import json
import pandas as pd
import concurrent.futures
from tqdm import tqdm
import time
import random
import os
import re
from bs4 import BeautifulSoup
import threading

BASE_API = "https://chennaibankauction.com/wp-json/wp/v2/posts"
LOGIN_URL = "https://chennaibankauction.com/login/"

USERNAME = "deepakcalzone@gmail.com" 
PASSWORD = "Passw0rd@1234"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36",
    "Accept": "application/json"
}

session = requests.Session()
session.headers.update(HEADERS)

def login_to_wordpress():
    print("Loading session cookies from cookies.json...", flush=True)
    try:
        with open("cookies.json", "r") as f:
            cookies = json.load(f)
        for c in cookies:
            session.cookies.set(c['name'], c['value'], domain=c.get('domain', 'chennaibankauction.com'))
        print("[SUCCESS] Cookies loaded successfully from cookies.json.")
        return True
    except FileNotFoundError:
        print("[ERROR] cookies.json not found! Please run 'py get_cookies.py' first.")
        return False
    except Exception as e:
        print(f"[ERROR] Failed to load cookies: {e}")
        return False

request_lock = threading.Lock()

def fetch_page(page, max_retries=5):
    url = f"{BASE_API}?per_page=100&page={page}&_embed=1"
    for attempt in range(max_retries):
        try:
            with request_lock:
                time.sleep(random.uniform(0.5, 1.5))
            r = session.get(url, timeout=20)
            if r.status_code == 200:
                return r.json()
            elif r.status_code == 400:
                return []
            elif r.status_code == 403 or r.status_code == 429:
                print(f" [API] IP Blocked on page {page}, waiting 15s...")
                time.sleep(15)
            else:
                time.sleep(2)
        except Exception:
            time.sleep(2)
    return []

def flatten_post(post):
    row = {
        "ID": post.get("id"),
        "Date": post.get("date"),
        "Modified": post.get("modified"),
        "Slug": post.get("slug"),
        "Status": post.get("status"),
        "Type": post.get("type"),
        "Link": post.get("link"),
        "Title": post.get("title", {}).get("rendered", ""),
        "Author ID": post.get("author"),
        "Featured Media URL": post.get("_embedded", {}).get("wp:featuredmedia", [{}])[0].get("source_url") if post.get("_embedded", {}).get("wp:featuredmedia") else "",
    }
    acf = post.get("acf", {})
    if isinstance(acf, dict):
        for k, v in acf.items():
            if isinstance(v, (str, int, float, bool)) or v is None:
                row[f"ACF: {k}"] = v
            else:
                row[f"ACF: {k}"] = str(v)
    return row

def fetch_premium_details(row, max_retries=3):
    link = row.get("Link")
    if not link: 
        return row
    for attempt in range(max_retries):
        try:
            with request_lock:
                time.sleep(random.uniform(0.3, 1.0))
                
            r = session.get(link, timeout=20)
            if r.status_code in [403, 429]:
                print(f" [HTML] IP Blocked on {link}, waiting 15s...")
                time.sleep(15)
                continue
                
            soup = BeautifulSoup(r.text, 'html.parser')
            
            # Correct parsing logic: Iterate through all rows and extract the first two cells (th or td)
            for tr in soup.find_all('tr'):
                cells = tr.find_all(['th', 'td'])
                if len(cells) >= 2:
                    key = cells[0].text.strip()
                    val = cells[1].text.strip()
                    if key:
                        row[key] = val
                        
            # Try to find Sale Notice link directly in the HTML content
            sale_notice_link = soup.find('a', string=re.compile(r'sale\s*notice|tender\s*document', re.I))
            if sale_notice_link and sale_notice_link.get('href'):
                row["Sale Notice URL"] = sale_notice_link['href']
            else:
                # Fetch the actual Sales Notice URL from the Media API securely
                try:
                    media_url = f"https://chennaibankauction.com/wp-json/wp/v2/media?parent={row.get('ID')}"
                    media_req = session.get(media_url, timeout=10)
                    if media_req.status_code == 200:
                        media_data = media_req.json()
                        if len(media_data) > 0 and 'guid' in media_data[0]:
                            row["Sale Notice URL"] = media_data[0]['guid'].get('rendered', '')
                except Exception as e:
                    pass

            if not row.get("Sale Notice URL"):
                row["Sale Notice URL"] = ""
                
            return row
        except Exception:
            time.sleep(2)
    return row

def clean_for_excel(value):
    if isinstance(value, str):
        ILLEGAL_CHARACTERS_RE = re.compile(r'[\000-\010]|[\013-\014]|[\016-\037]')
        return ILLEGAL_CHARACTERS_RE.sub('', value)
    return value

def main():
    if not login_to_wordpress(): return
        
    print("Fetching total pages info...", flush=True)
    try:
        r = session.head(BASE_API, timeout=15)
        total_pages = int(r.headers.get("X-WP-TotalPages", 820))
        total_posts = int(r.headers.get("X-WP-Total", 8113))
    except Exception:
        total_pages = 820
        total_posts = 8113
        
    print(f"Total Posts: {total_posts} across {total_pages} pages.")
    
    print("Starting SAFE extraction (Sequential to avoid bans)...", flush=True)
    
    all_rows = []
    
    # 1. Fetch API Pages Sequentially (Safe & Reliable)
    # Total pages ~820, at ~1.5s per page = ~20 mins
    stop_fetching = False
    for page in tqdm(range(1, total_pages + 1), desc="Downloading API Pages (1/2)"):
        page_data = fetch_page(page)
        for post in page_data:
            all_rows.append(flatten_post(post))
            if post.get("id") == 197077:
                stop_fetching = True
                break
                
        if stop_fetching:
            print("\nReached target ID 197073 (03/07/2026). Stopping pagination.")
            break
            
    print(f"\nExtracted {len(all_rows)} basic records successfully!")
    if len(all_rows) == 0:
        print("Failed to extract any data. IP might be completely blocked.")
        return

    print("Now fetching detailed Premium HTML data for each record (This WILL take 1-2 hours to avoid bans)...", flush=True)
    
    final_rows = []
    # 2. Fetch HTML Pages with 3 Workers using Locks (Safe & Reliable)
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        futures2 = {executor.submit(fetch_premium_details, row): row for row in all_rows}
        
        for future in tqdm(concurrent.futures.as_completed(futures2), total=len(all_rows), desc="Scraping HTML Details (2/2)"):
            final_rows.append(future.result())
            
            # Periodic CSV Save every 500 records so data isn't lost if it crashes!
            if len(final_rows) % 500 == 0:
                temp_df = pd.DataFrame(final_rows)
                for c in temp_df.columns:
                    temp_df[c] = temp_df[c].apply(clean_for_excel)
                temp_df.to_csv("ChennaiBankAuction_BACKUP.csv", index=False)
    
    for row in final_rows:
        for k, v in row.items():
            row[k] = clean_for_excel(v)
            
    if final_rows:
        df = pd.DataFrame(final_rows)
        
        # The specific columns requested by the user
        requested_columns = [
            "ID", "Modified", "Title", "District", "Location", "Property Type", 
            "Area", "Possession Status", "Reserve Price", "Price Revision", 
            "Emd Amount", "Auction Date", "EMD Submission Date", "Documents Available", 
            "ACF: full_description_", "Last Auction Date", "Last Reserve Price", 
            "Bank / Institution", "Borrower Name", "Contact Details", "Bank Contact Details", 
            "Sale Notice URL", "Featured Media URL"
        ]
        
        # Ensure all requested columns exist, fill with empty string if missing
        for col in requested_columns:
            if col not in df.columns:
                df[col] = ""
                
        # Also include any other columns that have "bank", "contact", or "borrower" in their name just in case they changed the name
        extra_cols = [c for c in df.columns if c not in requested_columns and any(keyword in str(c).lower() for keyword in ['bank', 'contact', 'borrower', 'institution'])]
        
        final_cols = requested_columns + extra_cols
        df = df[final_cols]
        
        # Rename some columns to match user request exactly
        df = df.rename(columns={
            "ID": "Post Id",
            "Modified": "Modified Date",
            "ACF: full_description_": "Property Description",
            "Featured Media URL": "Property Image URL"
        })
        
        filename = "ChennaiBankAuction_All_Premium_Data.xlsx"
        print(f"\nSaving to {filename}...", flush=True)
        try:
            with pd.ExcelWriter(filename, engine='openpyxl') as writer:
                df.to_excel(writer, index=False)
            print("✅ Export complete! Excel file successfully generated.")
        except Exception as e:
            print(f"Error saving to Excel: {e}")
            csv_filename = "ChennaiBankAuction_All_Premium_Data.csv"
            df.to_csv(csv_filename, index=False)
            print(f"Saved as CSV instead: {csv_filename}")

if __name__ == "__main__":
    main()
