import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

def investigate():
    chrome_options = Options()
    # Let's run it non-headlessly first to see if it blocks us, but headless is easier for background
    # chrome_options.add_argument("--headless")
    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        url = "https://www.instafinancials.com/"
        print("Opening InstaFinancials...")
        driver.get(url)
        time.sleep(3)
        
        # Save homepage HTML
        with open("E:\\office\\key\\tofler\\insta_home.html", "w", encoding="utf-8") as f:
            f.write(driver.page_source)
        print("Homepage HTML saved.")
        
        # Try to find a search box. It's usually input type text with name/id containing 'search', 'query', or 'company'
        # I'll just print out all input fields to analyze later
        inputs = driver.find_elements(By.TAG_NAME, "input")
        print("Found Inputs:")
        for i in inputs:
            print(f"- id: {i.get_attribute('id')}, name: {i.get_attribute('name')}, placeholder: {i.get_attribute('placeholder')}")
            
    except Exception as e:
        print(f"Error: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    investigate()
