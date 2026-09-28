import requests
from bs4 import BeautifulSoup
import re

post_url = "https://chennaibankauction.com/property/135112/"

COOKIES = {
    "PHPSESSID": "a0sjbao08e6ub9rr3vccfr27st",
    "arm_cookie_2211": "a0sjbao08e6ub9rr3vccfr27st%7C%7C38727"
}

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Cookie": f"PHPSESSID={COOKIES['PHPSESSID']}; arm_cookie_2211={COOKIES['arm_cookie_2211']}"
}

res = requests.get(post_url, headers=HEADERS, timeout=30)
soup = BeautifulSoup(res.text, "lxml")
text = soup.get_text(" ", strip=True)

with open("test_output.txt", "w", encoding="utf-8") as f:
    f.write(text)

print("Saved to test_output.txt")
