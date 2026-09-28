from bs4 import BeautifulSoup
import json

with open('E:\\office\\key\\instafinancials\\sample_company.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

company_data = {}

tables = soup.find_all('table')
for t in tables:
    for row in t.find_all('tr'):
        cols = [c.text.strip().replace('\n', ' ') for c in row.find_all(['th', 'td'])]
        # print("COLS:", cols)
        for i in range(len(cols) - 1):
            label = cols[i].lower()
            val = cols[i+1]
            if "company cin" in label: company_data["CIN"] = val
            elif "company category" in label: company_data["CATEGORY"] = val
            elif "company subcategory" in label: company_data["SUBCATEGORY"] = val
            elif "company class" in label: company_data["CLASS"] = val
            elif "email id" in label:
                company_data["COMPANY_EMAIL"] = val
                company_data["EMAIL_1"] = val
            elif "address" in label:
                print("FOUND ADDRESS:", label, "VAL:", val)
                company_data["REGISTERED_OFFICE_ADDRESS"] = val
                parts = val.split(',')
                if len(parts) >= 3:
                    company_data["PINCODE"] = parts[-1].replace('-India','').strip()
                    company_data["STATE"] = parts[-2].strip()
                    company_data["CITY"] = parts[-3].strip()
                    company_data["COUNTRY"] = "India"

for elem in soup.find_all('strong'):
    if "Authorised Capital" in elem.text or "authorized capital" in elem.text.lower() or "authorised capital" in elem.text.lower():
        sibling = elem.find_next('td') or elem.find_next('span')
        print("Auth Cap:", elem.text, sibling.text.strip() if sibling else None)

for script_tag in soup.find_all('script', type='application/ld+json'):
    if not script_tag.string:
        continue
    try:
        data = json.loads(script_tag.string.strip())
        if data.get('@type') == 'Organization':
            print("JSONLD Data:", data)
    except:
        pass

print("COMPANY DATA:", company_data)
