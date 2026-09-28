import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import random
import os
import json

# -------- SETTINGS --------
DELAY_MIN = 2
DELAY_MAX = 5
START_LETTER = 'A'
END_LETTER = 'Z'
ALPHABETS = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
# --------------------------

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1'
}

session = requests.Session()
session.headers.update(HEADERS)

def load_cookies():
    if os.path.exists("cookies.json"):
        print("[*] Loading cookies from cookies.json...")
        try:
            with open("cookies.json", "r") as f:
                cookies = json.load(f)
            for c in cookies:
                session.cookies.set(c['name'], c['value'])
            print("    [✔] Cookies loaded.")
        except Exception as e:
            print(f"    [!] Failed to load cookies: {e}")
    else:
        print("[*] cookies.json not found. Using default session cookies.")
        session.cookies.set("InstaAuthID", "oqjp2aeerbt3mdv0zaida3te", domain=".instafinancials.com")
        session.cookies.set("MobileRequest", "False", domain=".instafinancials.com")

def get_companies_from_page(letter, page, max_retries=3):
    url = f"https://www.instafinancials.com/Companies/{letter}/CompanyList_{letter}{page}.html"
    
    # Update referer dynamically
    if page > 1:
        session.headers.update({'Referer': f"https://www.instafinancials.com/Companies/{letter}/CompanyList_{letter}{page-1}.html"})
    else:
        session.headers.update({'Referer': "https://www.instafinancials.com/"})

    for attempt in range(max_retries):
        time.sleep(random.uniform(DELAY_MIN, DELAY_MAX))
        print(f"[+] Fetching Letter {letter} - Page {page} (Attempt {attempt+1})...")
        
        try:
            response = session.get(url, timeout=20)
            
            if response.status_code == 404:
                return [], False  # No more pages

            if response.status_code in [403, 429, 503]:
                print(f"    [!] Blocked with status {response.status_code}. Waiting 15s...")
                time.sleep(15)
                continue

            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Check for bot block
            if "Captcha" in response.text or "Checking your browser" in response.text:
                print("    [!] Cloudflare / Captcha Block detected! IGNORING this page and moving to next...")
                return [], True  # Return True to move to next page

            table = soup.find('table', {'class': 'footable'})
            if not table:
                table = soup.find('table')
                
            if not table:
                print("    [-] No table found on this page. Reached the end or blocked.")
                return [], False
                
            rows = table.find('tbody').find_all('tr') if table.find('tbody') else table.find_all('tr')
            if len(rows) == 0:
                return [], False
                
            companies = []
            for row in rows:
                cols = row.find_all('td')
                if len(cols) >= 4:
                    cin = cols[0].text.strip()
                    name = cols[1].text.strip()
                    roc = cols[2].text.strip()
                    status = cols[3].text.strip()
                    
                    # Dummy check
                    if cin == "001" and name == "Anusha":
                        print("    [!] Dummy data detected (Bot protection). IGNORING this page and moving to next...")
                        return companies, True  # Return whatever was found, then True to go to next page
                        
                    a_tag = cols[1].find('a')
                    url_link = a_tag['href'] if a_tag and 'href' in a_tag.attrs else ""
                    if url_link and not url_link.startswith('http'):
                        url_link = f"https://www.instafinancials.com{url_link}"
                    
                    if cin and name and url_link:
                        companies.append({
                            "Company CIN": cin,
                            "Company Name": name,
                            "Company ROC": roc,
                            "Company Status": status,
                            "URL": url_link
                        })
                        
            if companies:
                return companies, True
            
        except Exception as e:
            print(f"    [!] Network error: {e}")
            time.sleep(5)
            
    # If all retries failed
    print("    [!] Max retries exceeded for this page. IGNORING and moving to next.")
    return [], True

def main():
    print("==========================================")
    print(" InstaFinancials Python Scraper (Auto-Ignore bots) ")
    print("==========================================")
    
    load_cookies()
    
    start_idx = ALPHABETS.index(START_LETTER)
    end_idx = ALPHABETS.index(END_LETTER)
    target_letters = ALPHABETS[start_idx:end_idx+1]
    
    for letter in target_letters:
        print(f"\n>>> Starting Extraction for Letter: {letter} <<<")
        page = 1
        has_next = True
        letter_companies = []
        empty_page_count = 0
        
        while has_next:
            data, has_next = get_companies_from_page(letter, page)
            
            if data:
                empty_page_count = 0
                letter_companies.extend(data)
                print(f"    [✔] Extracted {len(data)} companies from Page {page}. Total for {letter}: {len(letter_companies)}")
            else:
                if has_next:  # If we ignored it but still want to continue
                    empty_page_count += 1
            
            # Prevent infinite loop if they give us 10 dummy pages in a row
            if empty_page_count > 10:
                print(f"    [!] 10 consecutive empty/blocked pages detected. Skipping to next letter to prevent infinite loop...")
                break
                
            # Periodic CSV Save so data isn't lost if it crashes!
            if page % 2 == 0 and letter_companies:
                temp_df = pd.DataFrame(letter_companies)
                temp_df.to_csv(f"InstaFinancials_{letter}_BACKUP.csv", index=False)
                
            if has_next:
                page += 1
                
        # Save Final CSV for this letter
        if letter_companies:
            df = pd.DataFrame(letter_companies)
            df.to_csv(f"InstaFinancials_{letter}_FINAL.csv", index=False)
            print(f"[💾] Saved Letter {letter} to CSV.")
            
    print("\n[💾] Combining into a single Excel File...")
    excel_filename = "InstaFinancials_Total_Data.xlsx"
    
    try:
        with pd.ExcelWriter(excel_filename, engine='xlsxwriter') as writer:
            for letter in target_letters:
                csv_file = f"InstaFinancials_{letter}_FINAL.csv"
                if os.path.exists(csv_file):
                    df = pd.read_csv(csv_file)
                    df.to_excel(writer, sheet_name=f"Sheet_{letter}", index=False)
        print(f"\n✅ All scraping completed! Data successfully saved to {excel_filename}")
    except Exception as e:
        print(f"\n[!] Error saving Excel: {e}")
        print("✅ Data is still safe in the individual CSV files!")

if __name__ == "__main__":
    main()
