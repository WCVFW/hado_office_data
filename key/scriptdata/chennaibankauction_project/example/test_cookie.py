import requests
from bs4 import BeautifulSoup

post_url = "https://chennaibankauction.com/property/135112/"

v1 = "deepakcalzone%7C1782887112%7C437SvDxvAJKHG4C0B9cRu2Qr6NnqYthKHm32NzUSfHW%7C23afcdd5f0afde20c64bc7559299fae583391069ff9ca18b09d8177878f58028"
v2 = "deepakcalzone%7C1782887112%7CLxnGjCxLRYsKYA9xhduOfjbzWMOML8QWefFAkiZkqUk%7C5dc105daeec2ee21d4881e2becea88c4a2eb2f63c6bf1839ca2849a03b4c82b4"
v3 = "deepakcalzone%7C1782887112%7C437SvDxvAJKHG4C0B9cRu2Qr6NnqYthKHm32NzUSfHW%7C675303a9d49dc52d53762bf82e349259b60f361cb8c4b0503028213db453ebfe"

# Trying to figure out which one goes to which. 
# In screenshot: 
# 1st value starts with deepakcalzone%7C1782887112%7CLxnG (so this is v2 for wordpress_eaac...)
# 2nd value starts with deepakcalzone%7C1782887112%7C437SvDx (this is for wordpress_logged_in_eaac...)
# 3rd value starts with deepakcalzone%7C1782887112%7C437SvDx (this is for wordpress_sec_eaac...)
# I can just add all of them into the Cookie string!

cookie_str = (
    "PHPSESSID=a0sjbao08e6ub9rr3vccfr27st; "
    "arm_cookie_2211=a0sjbao08e6ub9rr3vccfr27st%7C%7C38727; "
    f"wordpress_eaac68859d26adf343b3c13f0072bb62={v2}; "
    f"wordpress_logged_in_eaac68859d26adf343b3c13f0072bb62={v1}; "
    f"wordpress_sec_eaac68859d26adf343b3c13f0072bb62={v3}"
)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Cookie": cookie_str
}

res = requests.get(post_url, headers=HEADERS, timeout=30)
soup = BeautifulSoup(res.text, "lxml")
text = soup.get_text(" ", strip=True)

if "Available for Members" in text or "Unlock Full Legal" in text:
    print("Failed: Paywall is still there.")
else:
    print("Success: Logged in!")
    
import re
m = re.search(r"Borrower Name\s*(.+?)\s*Contact Details", text, re.I)
if m:
    print("Borrower Name:", m.group(1).strip())
