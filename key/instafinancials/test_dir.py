import requests
from bs4 import BeautifulSoup
import re

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Accept-Language': 'en-US,en;q=0.9'
}
session = requests.Session()
session.headers.update(HEADERS)
url = "https://www.instafinancials.com/director/deepak-kumar-sinha/07436864"
res = session.get(url, timeout=20)
print(res.status_code)
soup = BeautifulSoup(res.text, 'html.parser')

print("Checking text for 'birth' or 'DOB':")
print(re.findall(r'.{0,30}birth.{0,30}', res.text, re.IGNORECASE))
print(re.findall(r'.{0,30}dob.{0,30}', res.text, re.IGNORECASE))

for t in soup.find_all('table'):
    for row in t.find_all('tr'):
        cols = [c.text.strip().replace('\n', ' ') for c in row.find_all(['th', 'td'])]
        print(cols)
