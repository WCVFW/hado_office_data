import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def investigate():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        url = "https://www.tofler.in/hindustan-coca-cola-beverages-private-limited/company/U74899HR1997PTC100334"
        driver.get(url)
        time.sleep(3)
        
        with open("E:\\office\\key\\tofler\\company_page.html", "w", encoding="utf-8") as f:
            f.write(driver.page_source)
        print("HTML saved to company_page.html")
        
    finally:
        driver.quit()

if __name__ == "__main__":
    investigate()
