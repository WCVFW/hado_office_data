from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

options = webdriver.ChromeOptions()
options.add_argument('--headless')
driver = webdriver.Chrome(options=options)
try:
    print("Navigating to login page...")
    driver.get('https://chennaibankauction.com/login/')
    print('Page title:', driver.title)

    print("Entering credentials...")
    user_input = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, "user_login")))
    user_input.send_keys("deepakcalzone@gmail.com")
    pass_input = driver.find_element(By.NAME, "user_pass")
    pass_input.send_keys("Passw0rd@1234")
    
    print("Submitting...")
    try:
        submit = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
        submit.click()
    except Exception:
        driver.execute_script("document.getElementsByName('arm_login_form')[0].submit()")
        
    print("Waiting for login to process...")
    time.sleep(5)
    print('After login title:', driver.title)
    
    cookies = driver.get_cookies()
    print("Extracted Cookies:")
    for c in cookies:
        print(f" - {c['name']}: {c['value']}")
except Exception as e:
    print('Error:', e)
finally:
    driver.quit()
