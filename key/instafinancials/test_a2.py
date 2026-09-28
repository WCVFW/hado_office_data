import requests
import bs4

r = requests.get('https://www.instafinancials.com/Companies/A/CompanyList_A2.html', headers={
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://www.instafinancials.com/Companies/A/CompanyList_A1.html'
})
soup = bs4.BeautifulSoup(r.text, 'html.parser')
print('Rows:', len(soup.find_all('tr')))
tds = soup.find_all('td')
if tds:
    print(tds[0].text, tds[1].text)
