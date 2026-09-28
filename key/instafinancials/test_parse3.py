import re
from bs4 import BeautifulSoup

with open('E:\\office\\key\\instafinancials\\sample_company.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
company_data = {}

# Test Overview
overview = soup.find(id='companyOverviewContainer')
if overview:
    p_tags = overview.find_all('p')
    text = " ".join([p.text for p in p_tags])
    
    match_incorp = re.search(r"incorporated on ([\d\w\s-]+)\.", text)
    if match_incorp:
        company_data["DATE_OF_REGISTRATION"] = match_incorp.group(1).strip()
        
    match_auth = re.search(r"authorized share capital is ([^\s]+)", text)
    if match_auth:
        company_data["AUTHORIZED_CAPITAL"] = match_auth.group(1).strip()

    match_paid = re.search(r"paid up capital is ([^\s]+)", text)
    if match_paid:
        company_data["PAIDUP_CAPITAL"] = match_paid.group(1).strip()
        
    match_act = re.search(r"main line of business is (.*?)\.", text)
    if match_act:
        company_data["ACTIVITY_DESCRIPTION"] = match_act.group(1).strip()

# Test Industry Card
cards = soup.find_all(class_='highlight-card')
for card in cards:
    h3 = card.find('h3')
    if h3 and 'Industry' in h3.text:
        sub = card.find(class_='sub-value')
        if sub and 'NIC Code' in sub.text:
            company_data["ACTIVITY_CODE"] = sub.text.replace('NIC Code', '').strip()

print(company_data)
