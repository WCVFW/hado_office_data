import json
from bs4 import BeautifulSoup

with open('E:\\office\\key\\instafinancials\\sample_company.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

for script_tag in soup.find_all('script', type='application/ld+json'):
    if not script_tag.string:
        continue
    try:
        data = json.loads(script_tag.string.strip())
        print("FOUND JSONLD, @type is", data.get('@type'))
        if data.get('@type') == 'Organization':
            print("FOUND ORGANIZATION DATA:")
            print(json.dumps(data, indent=2))
    except Exception as e:
        print("ERROR parsing JSONLD:", e)

print("CAPITAL SEARCH:")
for elem in soup.find_all('strong'):
    if "Authorised Capital" in elem.text or "authorized capital" in elem.text.lower() or "authorised capital" in elem.text.lower():
        print("FOUND Auth Cap elem:", elem.text)
        print("Its parent:", elem.parent.text)

print("ALL STRONG TAGS:")
# print([e.text for e in soup.find_all('strong')])
