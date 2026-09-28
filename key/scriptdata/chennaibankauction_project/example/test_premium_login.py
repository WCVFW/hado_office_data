import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json

options = uc.ChromeOptions()
options.add_argument('--headless')
driver = uc.Chrome(options=options, version_main=149)

try:
    print("Navigating to login page...")
    driver.get("https://chennaibankauction.com/login")
    time.sleep(3)
    
    print("Entering credentials...")
    driver.find_element(By.ID, "user_login").send_keys("deepakcalzone@gmail.com")
    driver.find_element(By.ID, "user_pass").send_keys("Passw0rd@1234")
    driver.find_element(By.ID, "wp-submit").click()
    
    time.sleep(5)
    print("Current URL after login:", driver.current_url)
    
    print("Fetching API with premium access...")
    driver.get("https://chennaibankauction.com/wp-json/wp/v2/posts?per_page=1&page=1")
    time.sleep(3)
    
    body = driver.find_element(By.TAG_NAME, "body").text
    data = json.loads(body)
    
    with open("premium_sample.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        
    print("Saved premium_sample.json")
except Exception as e:
    print("Error:", e)
finally:
    driver.quit()
