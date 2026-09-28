import requests
import json
from bs4 import BeautifulSoup

cookies_list = [
    {
        "domain": "chennaibankauction.com",
        "hostOnly": True,
        "httpOnly": True,
        "name": "wordpress_logged_in_eaac68859d26adf343b3c13f0072bb62",
        "path": "/",
        "sameSite": None,
        "secure": True,
        "session": True,
        "storeId": None,
        "value": "deepakcalzone%7C1783330045%7C2cFZkdBQq7aW3aqc9MMSpQQAZNEVkcktkhnICEOj2JA%7Ca621f837cef79d45384ab3a6266f80ee3f3f6174e1e74cd7d8ee7e429da7ae50"
    },
    {
        "name": "PHPSESSID",
        "value": "0uoi51sd1lsil4lt47foa5dfri"
    }
]

session = requests.Session()
for cookie in cookies_list:
    session.cookies.set(cookie['name'], cookie['value'], domain='chennaibankauction.com')

session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0.0.0 Safari/537.36'
})

url = "https://chennaibankauction.com/wp-json/wp/v2/posts?include=197077&per_page=1"
print(f"Fetching {url}")
r = session.get(url)
print("Status:", r.status_code)
if r.status_code == 200:
    data = r.json()
    if len(data) > 0:
        html_content = data[0].get('content', {}).get('rendered', '')
        soup = BeautifulSoup(html_content, 'html.parser')
        print("Description:", soup.get_text(separator=" ").strip()[:200])
    else:
        print("Empty response")
else:
    print(r.text[:500])
