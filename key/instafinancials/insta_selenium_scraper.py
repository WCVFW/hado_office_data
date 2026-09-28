from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import pandas as pd
import time
import random
import os
import re

# -------- SETTINGS --------
DELAY_MIN = 3
DELAY_MAX = 7
START_LETTER = 'A'
END_LETTER = 'Z'
ALPHABETS = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
# --------------------------

def setup_driver():
    chrome_options = Options()
    # We will NOT use headless mode by default. Seeing the browser helps bypass bot checks.
    # chrome_options.add_argument("--headless") 
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--window-size=1920,1080")
    
    # Options to mask Selenium
    chrome_options.add_argument("--disable-blink-features=AutomationControlled")
    chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
    chrome_options.add_experimental_option('useAutomationExtension', False)
    
    # Adding a common user agent
    chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
    
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)
    
    # Hide webdriver signature
    driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
    
    return driver

def get_companies_from_page(driver, letter, page, max_retries=3):
    url = f"https://www.instafinancials.com/Companies/{letter}/CompanyList_{letter}{page}.html"
    
    for attempt in range(max_retries):
        print(f"[+] Fetching Letter {letter} - Page {page} (Attempt {attempt+1})...")
        
        try:
            driver.get(url)
            time.sleep(random.uniform(DELAY_MIN, DELAY_MAX))
            
            # Parse the page
            soup = BeautifulSoup(driver.page_source, 'html.parser')
            
            # Check for 404/End of pages
            if "Server Error" in driver.page_source or "404 - File or directory not found" in driver.page_source or "Page Not Found" in driver.page_source:
                return [], False  # No more pages

            # Check for bot block
            if "Captcha" in driver.page_source or "Checking your browser" in driver.page_source:
                print("    [!] Cloudflare / Captcha Block detected! Triggering browser restart...")
                return [], "STOP"
                
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
                        print("    [!] Dummy data detected (Bot protection honeypot). Triggering browser restart...")
                        return [], "STOP"
                        
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
            print(f"    [!] Browser error: {e}")
            time.sleep(5)
            
    print("    [!] Max retries exceeded for this page. Moving to next.")
    return [], False

def main():
    print("==========================================")
    print(" InstaFinancials Selenium Scraper         ")
    print("==========================================")
    
    target_url = input("Enter the starting URL (e.g., https://www.instafinancials.com/Companies/A/CompanyList_A1.html): ").strip()
    
    # Extract letter and page from URL using regex
    match = re.search(r'/Companies/([A-Z])/CompanyList_\1(\d+)\.html', target_url, re.IGNORECASE)
    if match:
        start_letter = match.group(1).upper()
        start_page = int(match.group(2))
    else:
        print("[!] Invalid URL format. Please ensure it matches the pattern: https://www.instafinancials.com/Companies/A/CompanyList_A1.html")
        return
        
    print(f"[*] Starting from Letter: {start_letter}, Page: {start_page}")
    
    print("[*] Launching Chrome Browser...")
    driver = setup_driver()
    
    start_idx = ALPHABETS.index(start_letter)
    end_idx = ALPHABETS.index(END_LETTER)
    target_letters = ALPHABETS[start_idx:end_idx+1]
    
    global_stop = False
    
    try:
        for letter in target_letters:
            if global_stop:
                break
                
            print(f"\n>>> Starting Extraction for Letter: {letter} <<<")
            
            # If it's the first letter, start from the input page. Otherwise, start from page 1.
            page = start_page if letter == start_letter else 1
            
            has_next = True
            letter_companies = []
            
            page_restart_attempts = 0
            while has_next:
                data, status = get_companies_from_page(driver, letter, page)
                
                if status == "STOP":
                    page_restart_attempts += 1
                    if page_restart_attempts > 5:
                        print(f"\n[!] Failed to bypass block after 5 restarts on Page {page}. Skipping to next letter...")
                        break
                    print(f"\n[!] Bot block on Letter {letter} Page {page}. Restarting Browser to bypass (Attempt {page_restart_attempts})...")
                    driver.quit()
                    time.sleep(10)
                    driver = setup_driver()
                    continue  # Retry the exact same page!
                    
                page_restart_attempts = 0 # Reset on success
                
                if data:
                    letter_companies.extend(data)
                    print(f"    [✔] Extracted {len(data)} companies from Page {page}. Total for {letter}: {len(letter_companies)}")
                
                # Periodic CSV Save
                if page % 2 == 0 and letter_companies:
                    temp_df = pd.DataFrame(letter_companies)
                    temp_df.to_csv(f"InstaFinancials_{letter}_BACKUP.csv", index=False)
                    
                if status == True:
                    page += 1
                else:
                    has_next = False
                    
            # Save Final CSV for this letter
            if letter_companies:
                df = pd.DataFrame(letter_companies)
                df.to_csv(f"InstaFinancials_{letter}_FINAL.csv", index=False)
                print(f"[💾] Saved Letter {letter} to CSV.")
    finally:
        print("\n[*] Closing Browser...")
        driver.quit()
        
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
