from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import json

print("Opening Chrome... Waiting for Cloudflare check to finish.")
print("NOTE: If a Cloudflare Captcha appears, please solve it manually in the Chrome window!")

driver = webdriver.Chrome()
driver.get("https://chennaibankauction.com/login/")

try:
    # 1. Wait until Cloudflare is bypassed and login form appears
    login_form_found = False
    for i in range(120): # Wait up to 120 seconds
        try:
            if driver.find_elements(By.NAME, "user_login"):
                login_form_found = True
                break
        except:
            pass
        time.sleep(1)

    if not login_form_found:
        print("Login form didn't appear after 120 seconds. Exiting.")
        driver.quit()
        exit()

    print("Cloudflare bypassed! Entering credentials...")
    driver.find_element(By.NAME, "user_login").send_keys("deepakcalzone@gmail.com")
    pass_input = driver.find_element(By.NAME, "user_pass")
    pass_input.send_keys("Passw0rd@1234")
    
    # 2. Click Login
    print("Submitting login form...")
    try:
        pass_input.submit()
    except:
        try:
            driver.find_element(By.NAME, "wp-submit").click()
        except:
            print("Failed to click submit automatically. Please click it manually if needed.")

    print("Login submitted! Waiting for authentication to complete...")
    
    # 3. Wait until the premium cookie (arm_cookie_2211) is set
    premium_cookie_found = False
    for i in range(60): # Wait up to 60 seconds
        cookies = driver.get_cookies()
        if any(c['name'] == 'arm_cookie_2211' for c in cookies):
            premium_cookie_found = True
            with open("cookies.json", "w") as f:
                json.dump(cookies, f)
            print("✅ SUCCESS: Premium cookies successfully extracted and saved to cookies.json!")
            break
        time.sleep(1)

    if not premium_cookie_found:
        print("❌ FAILED: Login took too long or credentials failed. Premium cookie not found.")

except Exception as e:
    print("Error:", e)
finally:
    driver.quit()
