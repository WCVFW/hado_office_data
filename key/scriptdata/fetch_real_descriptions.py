import pandas as pd
import requests
import json
import math
import time

file_path = r'E:\office\key\scriptdata\ChennaiBankAuctions_DB_Ready.xlsx'
print("Loading Excel file...")
df = pd.read_excel(file_path)

cookies_list = [
    {
        "name": "wordpress_logged_in_eaac68859d26adf343b3c13f0072bb62",
        "value": "deepakcalzone%7C1783330045%7C2cFZkdBQq7aW3aqc9MMSpQQAZNEVkcktkhnICEOj2JA%7Ca621f837cef79d45384ab3a6266f80ee3f3f6174e1e74cd7d8ee7e429da7ae50"
    },
    {
        "name": "PHPSESSID",
        "value": "0uoi51sd1lsil4lt47foa5dfri"
    }
]

session = requests.Session()
for cookie in cookies_list:
    session.cookies.set(cookie['name'], cookie['value'], domain='chennaibankauction.com')

session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0.0.0 Safari/537.36'
})

# We want to fetch the real descriptions from ACF
post_ids = df['Post ID'].dropna().astype(int).astype(str).tolist()

batch_size = 50
total_batches = math.ceil(len(post_ids) / batch_size)

desc_map = {}

print(f"Fetching real descriptions for {len(post_ids)} posts in {total_batches} batches...")

for i in range(total_batches):
    batch_ids = post_ids[i * batch_size : (i + 1) * batch_size]
    ids_str = ",".join(batch_ids)
    
    url = f"https://chennaibankauction.com/wp-json/wp/v2/posts?include={ids_str}&per_page={batch_size}"
    
    try:
        r = session.get(url, timeout=30)
        if r.status_code == 200:
            data = r.json()
            for post in data:
                pid = str(post.get('id'))
                acf = post.get('acf', {})
                desc = acf.get('full_description_') or acf.get('short_note') or ''
                if desc:
                    desc_map[pid] = str(desc).strip()
        else:
            print(f"Batch {i+1} failed: HTTP {r.status_code}")
    except Exception as e:
        print(f"Batch {i+1} error: {e}")
        
    print(f"Processed batch {i+1}/{total_batches} - Extracted {len(desc_map)} descriptions so far...")
    time.sleep(1) # Be nice to the server

import re

def clean_for_excel(value):
    if isinstance(value, str):
        ILLEGAL_CHARACTERS_RE = re.compile(r'[\000-\010]|[\013-\014]|[\016-\037]')
        return ILLEGAL_CHARACTERS_RE.sub('', value)
    return value

print("Applying real descriptions to Excel...")
def apply_desc(row):
    pid = str(row.get('Post ID', '')).replace('.0', '')
    if pid in desc_map:
        return clean_for_excel(desc_map[pid])
    return clean_for_excel(row.get('Description', ''))

df['Description'] = df.apply(apply_desc, axis=1)

print("Saving Excel file...")
df.to_excel(file_path, index=False)
print("Done! Real descriptions have been successfully downloaded and saved!")
