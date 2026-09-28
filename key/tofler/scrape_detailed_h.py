import time
import csv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

def scrape_detailed_h():
    print("Setting up Chrome...")
    chrome_options = Options()
    # Adding headless to make it faster and less intrusive, though you won't see the browser opening
    # chrome_options.add_argument("--headless")
    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        print("Opening Tofler website...")
        driver.get("https://www.tofler.in/")
        time.sleep(3)
        
        print("Searching for 'H'...")
        search_box = driver.find_element(By.ID, "searchbox")
        search_box.send_keys("H")
        
        print("Waiting for suggestions to load...")
        time.sleep(4) 
        
        # Get suggestion links
        print("Extracting company URLs...")
        # Get anchor tags from dropdown or static wrapper
        elements = driver.find_elements(By.CSS_SELECTOR, ".ui-menu-item a, .search_suggestion_box a, .ui-autocomplete a, .home_suggestion_wrapper a")
        
        company_urls = []
        for el in elements:
            url = el.get_attribute("href")
            # Ensure it's a company page link
            if url and "/company/" in url and url not in company_urls:
                company_urls.append(url)
                
        # Limit to 10 companies for safety
        company_urls = company_urls[:10]
        
        if not company_urls:
            print("Could not find any company URLs. Exiting.")
            return
            
        print(f"Found {len(company_urls)} company URLs. Starting deep extraction...")
        
        all_companies_data = []
        all_headers = set(["Company Name", "URL"]) # We will track all unique keys
        
        for index, url in enumerate(company_urls):
            print(f"[{index+1}/{len(company_urls)}] Scraping details from: {url}")
            driver.get(url)
            time.sleep(3) # Wait for page to load
            
            company_data = {"URL": url}
            
            # Try to get the company name from the h1 or title
            try:
                title = driver.find_element(By.TAG_NAME, "h1").text.strip()
                company_data["Company Name"] = title
            except:
                company_data["Company Name"] = driver.title.split("|")[0].strip()
                
            # Extract structured data from tables (this captures CIN, Directors, Paid Up Capital, etc.)
            rows = driver.find_elements(By.TAG_NAME, "tr")
            for row in rows:
                try:
                    th = row.find_element(By.TAG_NAME, "th").text.strip()
                    td = row.find_element(By.TAG_NAME, "td").text.strip()
                    if th and td:
                        # Clean up TH if it has colon etc
                        th = th.replace(":", "").strip()
                        company_data[th] = td
                        all_headers.add(th)
                except:
                    pass # Not a simple key-value row
            
            # Special case for Email
            try:
                email_elem = driver.find_element(By.CSS_SELECTOR, "a[href^='mailto']")
                company_data["Email"] = email_elem.text.strip()
                all_headers.add("Email")
            except:
                pass
                
            all_companies_data.append(company_data)
            
        # Save to CSV
        output_path = 'E:\\office\\key\\tofler\\Detailed_H_Companies.csv'
        
        # Sort headers so Name and URL are first
        header_list = ["Company Name", "URL"] + sorted([h for h in all_headers if h not in ["Company Name", "URL"]])
        
        with open(output_path, 'w', newline='', encoding='utf-8') as output_file:
            dict_writer = csv.DictWriter(output_file, fieldnames=header_list, extrasaction='ignore')
            dict_writer.writeheader()
            dict_writer.writerows(all_companies_data)
            
        print(f"\nSuccess! Saved detailed info for {len(all_companies_data)} companies to {output_path}")

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        print("Closing browser...")
        driver.quit()

if __name__ == "__main__":
    scrape_detailed_h()
