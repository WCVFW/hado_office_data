import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
from bs4 import BeautifulSoup
import re
import time
import json
import sys

# User Credentials
EMAIL = "deepakcalzone@gmail.com"
PASSWORD = "Passw0rd@1234"

print("Starting Premium Scraper with automatic login...", flush=True)

options = uc.ChromeOptions()
options.add_argument('--headless')
driver = uc.Chrome(options=options, version_main=149)

try:
    print("Navigating to the Login Page...", flush=True)
    driver.get("https://chennaibankauction.com/login/")
    time.sleep(5) # Wait for Cloudflare and page load
    
    print("Entering credentials...", flush=True)
    
    # Try finding inputs by name (ARMember plugin style)
    try:
        user_input = driver.find_element(By.NAME, "user_login")
        pass_input = driver.find_element(By.NAME, "user_pass")
        user_input.send_keys(EMAIL)
        pass_input.send_keys(PASSWORD)
        
        # Click the submit button inside the form
        submit_btn = driver.find_element(By.CSS_SELECTOR, "form input[type='submit'], form button[type='submit']")
        submit_btn.click()
        
        print("Logged in! Waiting for redirect to finish...", flush=True)
        time.sleep(8)
    except Exception as e:
        print(f"Could not find login fields: {e}")
        driver.quit()
        sys.exit()

    all_rows = []
    
    # Start fetching the API pages
    for page in range(1, 1000):
        url = f"https://chennaibankauction.com/wp-json/wp/v2/posts?per_page=100&page={page}"
        print(f"Fetching API Page {page} with Premium Access...", flush=True)
        
        driver.get(url)
        time.sleep(3) # Give API time to return
        
        body_text = driver.find_element(By.TAG_NAME, "body").text
        try:
            posts = json.loads(body_text)
            if not isinstance(posts, list) or len(posts) == 0:
                print(f"[!] No more properties found at page {page}. Stopping.")
                break
                
            for post in posts:
                post_id = post.get("id", "")
                
                # The premium details will be fully loaded here
                html_content = post.get("content", {}).get("rendered", "")
                soup = BeautifulSoup(html_content, "lxml")
                text = soup.get_text(" ", strip=True)
                
                # By default if regex fails, set to Not Found
                borrower = "Not Found"
                contact = "Not Found"
                
                # Check for Borrower
                m_borrower = re.search(r"Borrower Name\s*(.+?)\s*Contact Details", text, re.I)
                if m_borrower:
                    borrower = m_borrower.group(1).strip()
                    
                # Check for Contact
                m_contact = re.search(r"Contact Details\s*(.+)", text, re.I)
                if m_contact:
                    contact = m_contact.group(1).strip()
                    
                # If they are still missing, try looking in full_description_ as fallback
                if borrower == "Not Found" or contact == "Not Found":
                    fallback = post.get("acf", {}).get("full_description_", "")
                    f_soup = BeautifulSoup(fallback, "lxml")
                    f_text = f_soup.get_text(" ", strip=True)
                    
                    if borrower == "Not Found":
                        m_b = re.search(r"Borrower Name\s*(.+?)\s*Contact Details", f_text, re.I)
                        if m_b: borrower = m_b.group(1).strip()
                    
                    if contact == "Not Found":
                        m_c = re.search(r"Contact Details\s*(.+)", f_text, re.I)
                        if m_c: contact = m_c.group(1).strip()

                # Save ONLY the 3 requested fields
                all_rows.append({
                    "Property ID": post_id,
                    "Borrower Name": borrower,
                    "Contact Details": contact
                })
                
        except json.JSONDecodeError:
            print(f"Cloudflare block or error on page {page}.")
            time.sleep(3)
            continue
            
    # Save the data
    if all_rows:
        df = pd.DataFrame(all_rows)
        filename = "ChennaiBankAuction_Premium_Details.xlsx"
        df.to_excel(filename, index=False)
        print(f"Success! {len(all_rows)} properties saved to {filename}")
    else:
        print("No data extracted.")

except Exception as e:
    print(f"Unexpected Error: {e}")
finally:
    driver.quit()
