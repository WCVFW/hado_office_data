import time
import csv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

def scrape_insta():
    print("Setting up Chrome...")
    chrome_options = Options()
    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        print("Opening InstaFinancials website...")
        driver.get("https://www.instafinancials.com/")
        time.sleep(3)
        
        print("Searching for 'H'...")
        search_box = driver.find_element(By.ID, "txtSearchBox")
        from selenium.webdriver.common.keys import Keys
        search_box.send_keys("H")
        search_box.send_keys(Keys.ENTER)
        
        print("Waiting for search results page to load...")
        time.sleep(6) 
        
        print("Extracting company URLs from search results...")
        # Broad selector for search results page
        elements = driver.find_elements(By.CSS_SELECTOR, "a[href*='/company/']")
        
        company_urls = []
        for el in elements:
            url = el.get_attribute("href")
            # Only keep links that look valid and avoid duplicates
            if url and "http" in url and url not in company_urls:
                company_urls.append(url)
                
        company_urls = company_urls[:10]
        
        if not company_urls:
            print("Could not find any company URLs in the dropdown. Tofler's UI might be very different from InstaFinancials.")
            return
            
        print(f"Found {len(company_urls)} company URLs. Starting deep extraction...")
        
        all_companies_data = []
        all_headers = set(["Company Name", "URL"])
        
        for index, url in enumerate(company_urls):
            print(f"[{index+1}/{len(company_urls)}] Scraping details from: {url}")
            driver.get(url)
            time.sleep(3) 
            
            company_data = {"URL": url}
            
            # Get the company name
            try:
                title = driver.find_element(By.TAG_NAME, "h1").text.strip()
                company_data["Company Name"] = title
            except:
                company_data["Company Name"] = driver.title.split("|")[0].strip()
                
            # Extract structured data from tables
            rows = driver.find_elements(By.TAG_NAME, "tr")
            for row in rows:
                try:
                    # InstaFinancials tables might use th/td or two td's per row
                    cells = row.find_elements(By.TAG_NAME, "td")
                    if len(cells) == 2:
                        th = cells[0].text.strip().replace(":", "")
                        td = cells[1].text.strip()
                        if th and td:
                            company_data[th] = td
                            all_headers.add(th)
                    else:
                        th = row.find_element(By.TAG_NAME, "th").text.strip().replace(":", "")
                        td = row.find_element(By.TAG_NAME, "td").text.strip()
                        if th and td:
                            company_data[th] = td
                            all_headers.add(th)
                except:
                    pass 
            
            all_companies_data.append(company_data)
            
        # Save to CSV
        output_path = 'E:\\office\\key\\tofler\\InstaFinancials_H_Companies.csv'
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
    scrape_insta()
