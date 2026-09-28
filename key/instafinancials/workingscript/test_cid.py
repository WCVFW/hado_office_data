import cloudscraper
import re
session = cloudscraper.create_scraper()
res = session.get('https://www.instafinancials.com/company/dheeraj-agro-farms-private-limited/U00003BR1997PTC008152')
cids = re.findall(r'hdnCID\" value=\"(\d+)\"', res.text)
print('Found CID:', cids)
