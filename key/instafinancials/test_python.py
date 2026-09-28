import requests
from bs4 import BeautifulSoup
import pandas as pd

def check_page(letter, page):
    url = f"https://www.instafinancials.com/Companies/{letter}/CompanyList_{letter}{page}.html"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
    }
    print(f"Fetching {url}...")
    try:
        resp = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(resp.text, 'html.parser')
        rows = soup.find_all('tr')
        print(f"Total rows found on page {page}: {len(rows)}")
        
        # Check if first data row is 'Anusha'
        if len(rows) > 1:
            tds = rows[1].find_all('td')
            if tds:
                print(f"First row first cell: {tds[0].text.strip()}")
                if len(tds) > 1:
                    print(f"First row second cell: {tds[1].text.strip()}")
    except Exception as e:
        print("Error:", e)

check_page('A', 1)
check_page('A', 2)
