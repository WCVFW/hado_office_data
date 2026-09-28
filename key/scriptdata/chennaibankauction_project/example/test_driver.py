import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
import time

options = uc.ChromeOptions()
options.add_argument('--headless')
driver = uc.Chrome(options=options, version_main=149)

url = "https://chennaibankauction.com"
print("Loading main page to set cookies...")
driver.get(url)
time.sleep(3)

# Add cookies
cookies = [
    {"name": "PHPSESSID", "value": "a0sjbao08e6ub9rr3vccfr27st"},
    {"name": "arm_cookie_2211", "value": "a0sjbao08e6ub9rr3vccfr27st%7C%7C38727"},
    {"name": "wordpress_logged_in_eaac68859d26adf343b3c13f0072bb62", "value": "deepakcalzone%7C1782887112%7C437SvDxvAJKHG4C0B9cRu2Qr6NnqYthKHm32NzUSfHW%7C23afcdd5f0afde20c64bc7559299fae583391069ff9ca18b09d8177878f58028"},
    {"name": "wordpress_eaac68859d26adf343b3c13f0072bb62", "value": "deepakcalzone%7C1782887112%7CLxnGjCxLRYsKYA9xhduOfjbzWMOML8QWefFAkiZkqUk%7C5dc105daeec2ee21d4881e2becea88c4a2eb2f63c6bf1839ca2849a03b4c82b4"},
    {"name": "wordpress_sec_eaac68859d26adf343b3c13f0072bb62", "value": "deepakcalzone%7C1782887112%7C437SvDxvAJKHG4C0B9cRu2Qr6NnqYthKHm32NzUSfHW%7C675303a9d49dc52d53762bf82e349259b60f361cb8c4b0503028213db453ebfe"}
]

for cookie in cookies:
    driver.add_cookie(cookie)

post_url = "https://chennaibankauction.com/property/135112/"
print("Loading property page...")
driver.get(post_url)
time.sleep(3)

text = driver.find_element(By.TAG_NAME, "body").text

if "Available for Members" in text or "Unlock Full Legal" in text:
    print("Failed: Paywall is still there.")
else:
    print("Success: Logged in!")
    import re
    m = re.search(r"Borrower Name\s*(.+?)\s*Contact Details", text, re.I)
    if m:
        print("Borrower Name:", m.group(1).strip())
        
driver.quit()
