import requests
import json
from bs4 import BeautifulSoup
import pandas as pd
import time
import random
from concurrent.futures import ThreadPoolExecutor, as_completed
from tqdm import tqdm

print("Loading original CSV to get Post IDs...")
try:
    df = pd.read_csv("ChennaiBankAuction_All_Premium_Data.csv")
    post_ids = df["Post Id"].dropna().astype(str).tolist()
    print(f"Loaded {len(post_ids)} records.")
except Exception as e:
    print(f"Error reading CSV: {e}")
    exit(1)

print("Loading fresh cookies...")
session = requests.Session()
with open("cookies.json", "r") as f:
    cookies = json.load(f)
    for c in cookies:
        session.cookies.set(c['name'], c['value'], domain=c.get('domain', 'chennaibankauction.com'))

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

def fetch_details(post_id, max_retries=3):
    link = f"https://chennaibankauction.com/?p={post_id}"
    
    for attempt in range(max_retries):
        try:
            time.sleep(random.uniform(0.5, 1.5)) # MUST wait slightly to prevent instant ban
            r = session.get(link, headers=headers, timeout=20)
            
            if r.status_code in [403, 429] or "Checking your browser" in r.text or "Just a moment" in r.text:
                time.sleep(5)
                continue
                
            soup = BeautifulSoup(r.text, 'html.parser')
            
            details = {
                "Post Id": post_id,
                "Bank / Institution": "",
                "Borrower Name": "",
                "Contact Details": ""
            }
            
            for tr in soup.find_all('tr'):
                cells = tr.find_all(['th', 'td'])
                if len(cells) >= 2:
                    key = cells[0].get_text(strip=True).replace(":", "")
                    val = cells[1].get_text(strip=True)
                    
                    if "Bank / Institution" in key or "Bank Name" in key:
                        details["Bank / Institution"] = val
                    elif "Borrower Name" in key:
                        details["Borrower Name"] = val
                    elif "Contact" in key:
                        details["Contact Details"] = val
                        
            return details
            
        except requests.RequestException:
            time.sleep(2)
            
    return {"Post Id": post_id, "Bank / Institution": "Failed", "Borrower Name": "Failed", "Contact Details": "Failed"}

print("\nStarting Multi-Threaded Extraction (10 Threads)...")
results = []
with ThreadPoolExecutor(max_workers=10) as executor:
    # Submit all tasks
    future_to_id = {executor.submit(fetch_details, pid): pid for pid in post_ids}
    
    # Process as they complete
    for future in tqdm(as_completed(future_to_id), total=len(post_ids), desc="Fetching Premium Data"):
        result = future.result()
        results.append(result)

        # Save partial progress every 100 records just in case
        if len(results) % 100 == 0:
            pd.DataFrame(results).to_csv("ChennaiBankAuction_Missing_Details.csv", index=False)

print("\nSaving final extracted data...")
final_df = pd.DataFrame(results)
final_df.to_csv("ChennaiBankAuction_Missing_Details.csv", index=False)
try:
    final_df.to_excel("ChennaiBankAuction_Missing_Details.xlsx", index=False)
    print("✅ Export complete! Saved to ChennaiBankAuction_Missing_Details.xlsx")
except Exception as e:
    print(f"Error saving Excel (Maybe it is open?): {e}")
    print("✅ Saved to ChennaiBankAuction_Missing_Details.csv instead.")

print("All Done!")
