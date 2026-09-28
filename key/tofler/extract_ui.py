import time
import csv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

def extract_companies():
    print("Setting up Chrome...")
    chrome_options = Options()
    # Run headlessly if you don't want to see the browser, but it's fine to show it
    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        print("Opening Tofler website...")
        driver.get("https://www.tofler.in/")
        time.sleep(3)
        
        print("Searching for 'Tata'...")
        search_box = driver.find_element(By.ID, "searchbox")
        search_box.send_keys("Tata")
        
        # Wait for the API to fetch and render the dropdown on the screen
        print("Waiting for suggestions to load...")
        time.sleep(4) 
        
        print("Extracting suggestions from the screen...")
        # Try to find the dynamic dropdown elements. Usually it's an autocomplete list (ui-menu-item) 
        # or inside a custom div like search_suggestion_box
        elements = driver.find_elements(By.CSS_SELECTOR, ".ui-menu-item, .search_suggestion_box a, .ui-autocomplete li")
        
        companies = []
        for el in elements:
            text = el.text.strip()
            if text and text not in [c["Company Name"] for c in companies]:
                companies.append({"Company Name": text})
                
        # Fallback: if dynamic API blocks us or doesn't show, grab the default static suggestions
        if not companies:
            print("Could not find dynamic dropdown, extracting default suggestions on screen...")
            elements = driver.find_elements(By.CSS_SELECTOR, ".home_suggestion_wrapper a .badge")
            for el in elements:
                text = el.text.strip()
                if text and text not in [c["Company Name"] for c in companies]:
                    companies.append({"Company Name": text})
        
        # Get up to 10 companies
        companies = companies[:10]
        
        if companies:
            output_path = 'E:\\office\\key\\tofler\\Company_Details.csv'
            with open(output_path, 'w', newline='', encoding='utf-8') as output_file:
                dict_writer = csv.DictWriter(output_file, fieldnames=["Company Name"])
                dict_writer.writeheader()
                dict_writer.writerows(companies)
            print(f"\nSuccess! Saved {len(companies)} companies to {output_path} (Open this file in Excel)")
        else:
            print("\nCould not find any companies on the screen.")
            
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        print("Closing browser...")
        driver.quit()

if __name__ == "__main__":
    extract_companies()
