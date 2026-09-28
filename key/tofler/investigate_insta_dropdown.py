import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

def investigate():
    chrome_options = Options()
    # Headless might block some UI scripts
    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        url = "https://www.instafinancials.com/"
        driver.get(url)
        time.sleep(3)
        
        search_box = driver.find_element(By.ID, "txtSearchBox")
        search_box.send_keys("H")
        time.sleep(4)
        
        with open("E:\\office\\key\\tofler\\insta_dropdown.html", "w", encoding="utf-8") as f:
            f.write(driver.page_source)
        print("Dropdown HTML saved.")
        
    except Exception as e:
        print(f"Error: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    investigate()
