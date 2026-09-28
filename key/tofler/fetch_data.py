import urllib.request
import urllib.parse
import json
import csv

def fetch_and_save_companies():
    url = "https://www.tofler.in/cnamesearch"
    
    # We will search for 'Tata' which is a large group and should give many results
    search_query = "Tata"
    
    # The input box in HTML had name="q", so the payload is likely q=Tata or term=Tata
    # Tofler's autocomplete usually uses 'term' or 'q'. We'll try 'term' first as it's standard for jQuery UI autocomplete which they use.
    data = urllib.parse.urlencode({'term': search_query}).encode('utf-8')
    
    req = urllib.request.Request(url, data=data)
    req.add_header('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    req.add_header('X-Requested-With', 'XMLHttpRequest')
    req.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36')
    req.add_header('Referer', 'https://www.tofler.in/')

    print(f"Fetching data for query: '{search_query}'...")
    try:
        with urllib.request.urlopen(req) as response:
            response_data = response.read().decode('utf-8')
            
            try:
                result = json.loads(response_data)
            except json.JSONDecodeError:
                print("Failed to decode JSON. Server returned:")
                print(response_data[:500])
                return

            companies = result[:10] if isinstance(result, list) else []
            
            if companies:
                print(f"Found {len(companies)} companies. Saving to CSV (Excel format)...")
                keys = companies[0].keys()
                
                output_path = 'E:\\office\\key\\tofler\\Company_Details.csv'
                with open(output_path, 'w', newline='', encoding='utf-8') as output_file:
                    dict_writer = csv.DictWriter(output_file, fieldnames=keys)
                    dict_writer.writeheader()
                    dict_writer.writerows(companies)
                print(f"Success! Data saved to {output_path}")
            else:
                print("No companies found or unexpected format:")
                print(result)
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    fetch_and_save_companies()
