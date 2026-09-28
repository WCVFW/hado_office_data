import cloudscraper

session = cloudscraper.create_scraper()

url = "https://www.instafinancials.com/company/company.aspx/checkIfCompanyProductOrdered"

headers = {
    "Content-Type": "application/json; charset=utf-8",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "X-Requested-With": "XMLHttpRequest"
}

data = {
    "CompanyID": "1348794",
    "ProductID": "14"
}

try:
    print(f"Sending POST request to: {url}")
    res = session.post(url, headers=headers, json=data)
    
    print("\nStatus Code:", res.status_code)
    print("Response Headers:")
    for k, v in res.headers.items():
        if k.lower() not in ['date', 'server', 'x-aspnet-version', 'x-powered-by']:
            print(f"  {k}: {v}")
            
    print("\nResponse Body:")
    print(res.text)
    
except Exception as e:
    print("Error:", e)
