import pandas as pd
import requests
import json
import time
from bs4 import BeautifulSoup
from tqdm import tqdm

def main():
    print("Loading extracted IDs from ChennaiBankAuction_All_Premium_Data.xlsx...")
    try:
        df = pd.read_excel('ChennaiBankAuction_All_Premium_Data.xlsx')
    except Exception as e:
        print(f"Failed to read Excel file: {e}")
        return

    post_ids = df['Post Id'].dropna().astype(str).tolist()
    print(f"Found {len(post_ids)} properties to check for contact details.")

    print("Loading session cookies...")
    try:
        with open('cookies.json', 'r') as f:
            cookies = json.load(f)
        session = requests.Session()
        HEADERS = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8"
        }
        session.headers.update(HEADERS)
        for c in cookies:
            session.cookies.set(c['name'], c['value'])
    except Exception as e:
        print(f"Failed to load cookies.json: {e}")
        return

    extracted_data = []

    print("Extracting detailed contact/bank info from HTML tables...")
    for pid in tqdm(post_ids, desc="Extracting Contacts"):
        # The URL for a specific property via its ID (redirects or shows the page)
        url = f"https://chennaibankauction.com/?p={pid}"
        
        row_data = {
            "ID": pid,
            "Bank Name": "",
            "Borrower Name": "",
            "Contact Details": ""
        }
        
        try:
            r = session.get(url, timeout=15)
            if r.status_code == 200:
                soup = BeautifulSoup(r.text, 'html.parser')
                
                # We specifically want ANY row that could have Bank, Contact, Person, Officer, Mobile, Phone, Name etc
                for tr in soup.find_all('tr'):
                    cells = tr.find_all(['th', 'td'])
                    if len(cells) >= 2:
                        key = cells[0].text.strip()
                        val = cells[1].text.strip()
                        
                        if key:
                            k_lower = key.lower()
                            if any(x in k_lower for x in ['bank', 'institution']):
                                row_data['Bank Name'] = val
                            elif 'borrower' in k_lower:
                                row_data['Borrower Name'] = val
                            elif any(x in k_lower for x in ['contact', 'officer', 'mobile', 'phone', 'email', 'branch', 'authority', 'manager']):
                                if row_data['Contact Details']:
                                    row_data['Contact Details'] += f" | {key}: {val}"
                                else:
                                    row_data['Contact Details'] = val
        except Exception as e:
            row_data["Error"] = str(e)
            
        extracted_data.append(row_data)
        time.sleep(1.5) # Prevent getting blocked
        
    print("\nSaving extracted contact data...")
    out_df = pd.DataFrame(extracted_data)
    out_df.to_excel("Bank_Contacts_Extracted.xlsx", index=False)
    print("✅ Extraction complete! Saved to 'Bank_Contacts_Extracted.xlsx'")

if __name__ == '__main__':
    main()
