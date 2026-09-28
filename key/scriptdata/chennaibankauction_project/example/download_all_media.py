import os
import requests
from tqdm import tqdm
from concurrent.futures import ThreadPoolExecutor, as_completed
import time
import pandas as pd

MEDIA_API = "https://chennaibankauction.com/wp-json/wp/v2/media"
DOWNLOAD_DIR = r"E:\office\key\scriptdata\all_uploads"

if not os.path.exists(DOWNLOAD_DIR):
    os.makedirs(DOWNLOAD_DIR)

# Get total pages
print("Fetching total number of files...")
try:
    initial_req = requests.get(f"{MEDIA_API}?per_page=100")
    total_pages = int(initial_req.headers.get("X-WP-TotalPages", 1))
    total_items = int(initial_req.headers.get("X-WP-Total", 0))
    print(f"Found {total_items} total media files across {total_pages} pages.")
except Exception as e:
    print("Failed to reach API:", e)
    exit()

def fetch_media_links(page):
    url = f"{MEDIA_API}?per_page=100&page={page}"
    retries = 3
    for _ in range(retries):
        try:
            resp = requests.get(url, timeout=30)
            if resp.status_code == 200:
                data = resp.json()
                items = []
                for item in data:
                    if item.get("source_url"):
                        items.append({
                            "post_id": item.get("post"),
                            "source_url": item.get("source_url")
                        })
                return items
        except:
            time.sleep(2)
    return []

def download_file(item):
    url = item.get("source_url")
    if not url: return item
    filename = url.split('/')[-1]
    filepath = os.path.join(DOWNLOAD_DIR, filename)
    
    item["local_path"] = filepath
    
    if os.path.exists(filepath):
        return item  # Already downloaded
        
    try:
        r = requests.get(url, timeout=30)
        if r.status_code == 200:
            with open(filepath, 'wb') as f:
                f.write(r.content)
    except Exception as e:
        pass
    
    return item

if __name__ == "__main__":
    print("Collecting all download links...")
    all_items = []
    
    # Using ThreadPool to fetch API pages fast
    with ThreadPoolExecutor(max_workers=5) as executor:
        future_to_page = {executor.submit(fetch_media_links, p): p for p in range(1, total_pages + 1)}
        for future in tqdm(as_completed(future_to_page), total=total_pages, desc="Fetching Links"):
            items = future.result()
            if items:
                all_items.extend(items)
                
    print(f"\nSuccessfully collected {len(all_items)} file URLs.")
    print("Starting mass download...")
    
    completed_items = []
    # Download all files
    with ThreadPoolExecutor(max_workers=10) as executor:
        future_to_item = {executor.submit(download_file, item): item for item in all_items}
        for future in tqdm(as_completed(future_to_item), total=len(all_items), desc="Downloading Files"):
            res = future.result()
            if res:
                completed_items.append(res)

    print("Saving to Excel...")
    df = pd.DataFrame(completed_items)
    df.rename(columns={"post_id": "Property ID", "source_url": "Image URL", "local_path": "Local Image Path"}, inplace=True)
    
    excel_path = r"E:\office\key\scriptdata\media_downloads.xlsx"
    df.to_excel(excel_path, index=False)
    
    print(f"All files downloaded successfully to: {DOWNLOAD_DIR}")
    print(f"Excel report saved to: {excel_path}")
