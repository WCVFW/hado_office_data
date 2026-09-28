import pandas as pd
import requests
from bs4 import BeautifulSoup
import time
import re

main_excel = r'E:\office\key\scriptdata\ChennaiBankAuctions_DB_Ready.xlsx'

print("Loading Excel file...")
df = pd.read_excel(main_excel)

cookies_list = [
    {
        "name": "wordpress_logged_in_eaac68859d26adf343b3c13f0072bb62",
        "value": "deepakcalzone%7C1783331789%7CTyJrdqoJdZmcD7A5BH2NJcLuey6UBi7Qg5AAqc0lUF8%7C8c9b2f2277d5275d02bf45435d673d94098b89af4eef053495ae3b7998d9b7a4"
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

def clean_for_excel(value):
    if isinstance(value, str):
        ILLEGAL_CHARACTERS_RE = re.compile(r'[\000-\010]|[\013-\014]|[\016-\037]')
        return ILLEGAL_CHARACTERS_RE.sub('', value)
    return value

missing_borrower_mask = df['Borrower Name'].isna() | (df['Borrower Name'] == '')
missing_bank_mask = df['Bank Name'].isna() | (df['Bank Name'] == '')

missing_rows = df[missing_borrower_mask | missing_bank_mask]
print(f"Found {len(missing_rows)} rows missing Borrower Name or Bank Name.")

count = 0
for idx, row in missing_rows.iterrows():
    post_id = str(row.get('Post ID')).replace('.0', '')
    if not post_id or post_id == 'nan':
        continue
        
    url = f"https://chennaibankauction.com/?p={post_id}"
    try:
        r = session.get(url, timeout=15)
        if r.status_code == 200:
            soup = BeautifulSoup(r.text, 'html.parser')
            
            borrower = None
            bank = None
            
            # Scrape the HTML table for the exact fields
            for tr in soup.find_all('tr'):
                cells = tr.find_all(['th', 'td'])
                if len(cells) >= 2:
                    key = cells[0].text.strip().lower()
                    val = cells[1].text.strip()
                    
                    if 'borrower' in key:
                        borrower = val
                    elif 'bank' in key or 'institution' in key:
                        bank = val
            
            if borrower:
                df.at[idx, 'Borrower Name'] = clean_for_excel(borrower)
            if bank:
                df.at[idx, 'Bank Name'] = clean_for_excel(bank)
                
            print(f"[{count+1}/{len(missing_rows)}] Fixed Post ID {post_id} -> Bank: {bank[:15] if bank else 'None'}, Borrower: {borrower[:15] if borrower else 'None'}")
        elif r.status_code == 403:
            print(f"IP Blocked or Cookies expired on Post {post_id}!")
            break
            
    except Exception as e:
        print(f"Failed to fetch {post_id}: {e}")
        
    count += 1
    if count % 10 == 0:
        print("Saving progress...")
        df.to_excel(main_excel, index=False)
        
    time.sleep(1.5) # Anti-ban sleep

print("Final Save...")
df.to_excel(main_excel, index=False)
print("Finished fixing missing Borrowers and Banks!")
