import cloudscraper
from bs4 import BeautifulSoup
import pandas as pd
import time
import random
import os
import socket

# Tor Proxy Configuration
# Port 9150 is usually Tor Browser, Port 9050 is Tor background service
TOR_PROXY = "socks5h://127.0.0.1:9150"
PROXIES = {
    'http': TOR_PROXY,
    'https': TOR_PROXY
}

# Create a cloudscraper session to bypass Cloudflare JS challenges
session = cloudscraper.create_scraper(
    browser={
        'browser': 'chrome',
        'platform': 'windows',
        'mobile': False
    }
)
session.proxies.update(PROXIES)

def renew_tor_ip():
    """Sends a signal to Tor Control Port to change the IP address."""
    print("\n[Tor] Requesting new IP address...")
    # Try both Tor Browser control port (9151) and standard Tor control port (9051)
    for port in [9151, 9051]:
        try:
            with socket.create_connection(('127.0.0.1', port), timeout=3) as s:
                s.sendall(b'AUTHENTICATE ""\r\n')
                s.recv(1024)
                s.sendall(b'SIGNAL NEWNYM\r\n')
                s.recv(1024)
            print(f"[Tor] Successfully requested new IP on port {port}!")
            # Wait for Tor to establish a new circuit
            time.sleep(10)
            return True
        except Exception:
            continue
    print("[Tor] Failed to rotate IP (Control Port might not be open or requires auth).")
    return False

def extract_detailed_data(url):
    company_data = {
        "COMPANY_ID": "", "PRODUCT_ID": "", "CIN": "", "COMPANY_NAME": "", "DATE_OF_REGISTRATION": "", "PINCODE": "",
        "CITY": "", "STATE": "", "COUNTRY": "", "ROC": "", "CATEGORY": "",
        "CLASS": "", "SUBCATEGORY": "", "AUTHORIZED_CAPITAL": "", "PAIDUP_CAPITAL": "",
        "TOTAL_OBLIGATION_CONTRIBUTION": "", "ACTIVITY_CODE": "", "ACTIVITY_DESCRIPTION": "",
        "REGISTERED_OFFICE_ADDRESS": "", "ADDRESS_OTHER_THAN_RO": "", "COMPANY_EMAIL": "",
        "DIN": "", "DIRECTOR_NAME": "", "DATE_JOIN": "", "DESIGNATION": "", "DATE_OF_BRITH": "",
        "TOTAL_DIRECTORSHIPS": "", "DISQUALIFIED_164_2": "", "DIN_DEACTIVATED": "",
        "DIRECTOR_EMAIL": "", "DIRECTOR_MOBILE": ""
    }
    # Add mobile and email fields
    for i in range(1, 8): company_data[f"MOBILE_{i}"] = ""
    for i in range(1, 5): company_data[f"EMAIL_{i}"] = ""

    for attempt in range(3):
        time.sleep(random.uniform(4, 7))
        try:
            # Adding the Googlebot User-Agent header logic as requested
            custom_headers = {
                "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
            }
            res = session.get(url, headers=custom_headers, timeout=15)
            
            if res.status_code == 404:
                return company_data, False
            if res.status_code in [403, 429, 503]:
                print(f"\n[!] BLOCKED at {url} with status {res.status_code}. Waiting 60s...")
                time.sleep(60)
                renew_tor_ip()
                continue
            
            if "Captcha" in res.text or "Checking your browser" in res.text or "Cloudflare" in res.text:
                print(f"\n[!] CAPTCHA / CLOUDFLARE BLOCK detected at {url}! Waiting 60s...")
                time.sleep(60)
                renew_tor_ip()
                continue

            soup = BeautifulSoup(res.text, 'html.parser')
            
            # If the URL is directly a director profile, extract and return early
            if "/director/director-profile.aspx" in url:
                import re
                d_text = soup.get_text()
                d_emails = re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', d_text)
                d_mobiles = re.findall(r'\b[6789]\d{9}\b', d_text)
                if d_emails:
                    company_data["DIRECTOR_EMAIL"] = ", ".join(list(set(d_emails)))
                if d_mobiles:
                    company_data["DIRECTOR_MOBILE"] = ", ".join(list(set(d_mobiles)))
                title = soup.find('title')
                if title:
                    company_data["DIRECTOR_NAME"] = title.text.split('-')[0].replace('Login | Instafinancials', '').strip()
                return company_data, True
            
            # Extract basic data from tables
            tables = soup.find_all('table')
            for t in tables:
                for row in t.find_all('tr'):
                    cols = [c.text.strip().replace('\n', ' ') for c in row.find_all(['th', 'td'])]
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
                            if "other than" in label:
                                company_data["ADDRESS_OTHER_THAN_RO"] = val
                            else:
                                company_data["REGISTERED_OFFICE_ADDRESS"] = val
                                # Basic address parsing for Pin, State, City
                                parts = val.split(',')
                                if len(parts) >= 3:
                                    company_data["PINCODE"] = parts[-1].replace('-India','').strip()
                                    company_data["STATE"] = parts[-2].strip()
                                    company_data["CITY"] = parts[-3].strip()
                                    company_data["COUNTRY"] = "India"
                        
            # Overview text parsing
            import re
            overview = soup.find(id='companyOverviewContainer')
            if overview:
                p_tags = overview.find_all('p')
                text = " ".join([p.text for p in p_tags])
                match_incorp = re.search(r"incorporated on ([\d\w\s-]+)\.", text)
                if match_incorp: company_data["DATE_OF_REGISTRATION"] = match_incorp.group(1).strip()
                match_auth = re.search(r"authorized share capital is ([^\s]+)", text)
                if match_auth: company_data["AUTHORIZED_CAPITAL"] = match_auth.group(1).strip().replace('₹', '').replace('â‚¹', '')
                match_paid = re.search(r"paid up capital is ([^\s]+)", text, re.IGNORECASE)
                if match_paid: company_data["PAIDUP_CAPITAL"] = match_paid.group(1).strip().replace('₹', '').replace('â‚¹', '')
                match_obl = re.search(r"obligation of contribution is ([^\s]+)", text, re.IGNORECASE)
                if match_obl: company_data["TOTAL_OBLIGATION_CONTRIBUTION"] = match_obl.group(1).strip().replace('₹', '').replace('â‚¹', '')
                match_act = re.search(r"main line of business is (.*?)\.", text, re.IGNORECASE)
                if match_act: company_data["ACTIVITY_DESCRIPTION"] = match_act.group(1).strip()

            # Industry details
            cards = soup.find_all(class_='highlight-card')
            for card in cards:
                h3 = card.find('h3')
                if h3 and 'Industry' in h3.text:
                    sub = card.find(class_='sub-value')
                    if sub and 'NIC Code' in sub.text:
                        company_data["ACTIVITY_CODE"] = sub.text.replace('NIC Code', '').strip()

            # Capital bar parsing (for LLPs Total Obligation)
            for c_bar in soup.find_all(class_='capital-bar-item'):
                c_title = c_bar.find(class_='bar-title')
                c_fill = c_bar.find(class_='bar-fill')
                if c_title and c_fill:
                    if 'Obligation' in c_title.text:
                        company_data["TOTAL_OBLIGATION_CONTRIBUTION"] = c_fill.text.strip().replace('₹', '').replace('â‚¹', '')
                    elif 'Authorised' in c_title.text and not company_data.get("AUTHORIZED_CAPITAL"):
                        company_data["AUTHORIZED_CAPITAL"] = c_fill.text.strip().replace('₹', '').replace('â‚¹', '')
                    elif 'Paid up' in c_title.text and not company_data.get("PAIDUP_CAPITAL"):
                        company_data["PAIDUP_CAPITAL"] = c_fill.text.strip().replace('₹', '').replace('â‚¹', '')

            # Extract Company Name from Title
            title = soup.find('title')
            if title:
                company_data["COMPANY_NAME"] = title.text.split('-')[0].strip()
                
            # Extract internal CompanyID (CID)
            cid_input = soup.find('input', id=lambda x: x and 'hdnCID' in x)
            if cid_input and cid_input.has_attr('value'):
                company_data["COMPANY_ID"] = cid_input['value'].strip()
                company_data["PRODUCT_ID"] = "14" # Hardcoded InstaSummary product ID
            else:
                cids = re.findall(r'hdnCID.*?value=[\"\'](\d+)[\"\']', res.text)
                if not cids:
                    cids = re.findall(r'value=[\"\'](\d+)[\"\'].*?hdnCID', res.text)
                if cids:
                    company_data["COMPANY_ID"] = cids[0]
                    company_data["PRODUCT_ID"] = "14"
                
            # JSON-LD Schema Extraction for hidden fields!
            import json
            for script_tag in soup.find_all('script', type='application/ld+json'):
                if not script_tag.string:
                    continue
                try:
                    data = json.loads(script_tag.string.strip())
                    if data.get('@type') == 'Organization':
                        if 'CBL Data' not in data.get('name', ''):
                            if 'foundingDate' in data:
                                company_data["DATE_OF_REGISTRATION"] = data['foundingDate']
                            if 'description' in data:
                                company_data["ACTIVITY_DESCRIPTION"] = data['description']
                except:
                    pass

            # Fetch Director Data from the directors page
            try:
                parts = url.rsplit('/', 1)
                if len(parts) == 2:
                    director_url = f"{parts[0]}-{parts[1]}/company-directors"
                    d_res = session.get(director_url, timeout=10)
                    if d_res.status_code == 200:
                        d_soup = BeautifulSoup(d_res.text, 'html.parser')
                        d_tables = d_soup.find_all('table')
                        if d_tables:
                            d_rows = d_tables[0].find_all('tr')
                            if len(d_rows) > 1: # Row 0 is header
                                d_cols = [c.text.strip() for c in d_rows[1].find_all(['td', 'th'])]
                                if len(d_cols) >= 7:
                                    company_data["DIRECTOR_NAME"] = d_cols[0]
                                    company_data["DIN"] = d_cols[1]
                                    company_data["DESIGNATION"] = d_cols[2]
                                    company_data["DATE_JOIN"] = d_cols[3]
                                    company_data["TOTAL_DIRECTORSHIPS"] = d_cols[4]
                                    company_data["DISQUALIFIED_164_2"] = d_cols[5]
                                    company_data["DIN_DEACTIVATED"] = d_cols[6]
                                    
                                # Find director links and visit the profile to get their personal email/mobile
                                all_d_emails = []
                                all_d_mobiles = []
                                for r in d_rows[1:]:
                                    a_tag = r.find('a', href=True)
                                    if a_tag and '/director/' in a_tag['href'].lower():
                                        dir_prof_url = a_tag['href']
                                        if not dir_prof_url.startswith('http'):
                                            dir_prof_url = "https://www.instafinancials.com" + dir_prof_url
                                        try:
                                            dir_res = session.get(dir_prof_url, timeout=10)
                                            if dir_res.status_code == 200:
                                                import re
                                                dir_html = dir_res.text
                                                dir_em = re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', dir_html)
                                                dir_mo = re.findall(r'\b[6789]\d{9}\b', dir_html)
                                                
                                                # Filter generic InstaFinancials emails
                                                clean_em = [e for e in dir_em if 'instafinancials.com' not in e.lower() and e.lower() not in ['support@instacart.in', 'cs@instafinancials.com']]
                                                clean_mo = [m for m in dir_mo if m not in ['8792827285', '7337375276']] # Assuming these are generic platform contacts

                                                all_d_emails.extend(clean_em)
                                                all_d_mobiles.extend(clean_mo)
                                        except Exception:
                                            pass
                                
                                if all_d_emails:
                                    company_data["DIRECTOR_EMAIL"] = ", ".join(list(set(all_d_emails)))
                                if all_d_mobiles:
                                    company_data["DIRECTOR_MOBILE"] = ", ".join(list(set(all_d_mobiles)))
            except Exception as ex:
                pass
                
            # Try to find Mobile numbers in the text using regex
            try:
                page_text = soup.get_text()
                mobiles = re.findall(r'\b[6789]\d{9}\b', page_text)
                
                # Fallback to multiple search engines if company name is present
                if not mobiles and company_data["COMPANY_NAME"]:
                    import urllib.parse
                    query = urllib.parse.quote_plus(f'"{company_data["COMPANY_NAME"]}" contact mobile number India')
                    
                    search_urls = [
                        f"https://html.duckduckgo.com/html/?q={query}",
                        f"https://in.search.yahoo.com/search?p={query}",
                        f"https://www.ask.com/web?q={query}"
                    ]
                    
                    for s_url in search_urls:
                        try:
                            # Using the existing Tor session
                            s_res = session.get(s_url, timeout=5)
                            if s_res.status_code == 200:
                                found_mobs = re.findall(r'\b[6789]\d{9}\b', s_res.text)
                                if found_mobs:
                                    mobiles.extend(found_mobs)
                                    break # Stop searching if we found at least one number!
                        except Exception:
                            pass
                        
                if mobiles:
                    unique_mobs = list(set(mobiles))
                    for idx, mob in enumerate(unique_mobs[:7]):
                        company_data[f"MOBILE_{idx+1}"] = mob
            except Exception as e:
                pass
                
            # Verification: If we couldn't extract the main name, it means the page was blocked or invalid.
            if not company_data["COMPANY_NAME"] and not company_data["DIRECTOR_NAME"]:
                print(f"    [!] Failed to parse data from {url}. The page might be blocked by a challenge or invalid.")
                return company_data, False
                
            return company_data, True
            
        except Exception as e:
            print(f"    [!] Request error for {url}: {e}")
            time.sleep(3)
            
    return company_data, False

def main():
    input_csv = r"E:\office\key\instafinancials\CSV_Files\InstaFinancials_D_FINAL.csv"
    output_dir = r"E:\office\key\instafinancials\CSV_Files\deatiledcsv"
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    output_csv = os.path.join(output_dir, "InstaFinancials_D_FINAL_detailed.csv")
    
    print(f"[*] Reading {input_csv}...")
    df = pd.read_csv(input_csv)
    urls = df['URL'].dropna().tolist()

    print(f"[*] Found {len(urls)} URLs to process.")
    detailed_records = []
    start_idx = 0
    
    # Resume Logic: Check if output file exists and load it to skip processed rows
    if os.path.exists(output_csv):
        try:
            existing_df = pd.read_csv(output_csv)
            if not existing_df.empty:
                detailed_records = existing_df.to_dict('records')
                start_idx = len(detailed_records)
                print(f"[*] Found existing output! Resuming from record {start_idx + 1} / {len(urls)}...")
        except Exception as e:
            print(f"[!] Could not read existing output to resume: {e}")
    
    expected_headers = ['COMPANY_ID', 'PRODUCT_ID', 'CIN', 'COMPANY_NAME', 'DATE_OF_REGISTRATION', 'PINCODE', 'CITY', 'STATE', 'COUNTRY', 'ROC', 'CATEGORY', 'CLASS', 'SUBCATEGORY', 'AUTHORIZED_CAPITAL', 'PAIDUP_CAPITAL', 'TOTAL_OBLIGATION_CONTRIBUTION', 'ACTIVITY_CODE', 'ACTIVITY_DESCRIPTION', 'REGISTERED_OFFICE_ADDRESS', 'ADDRESS_OTHER_THAN_RO', 'COMPANY_EMAIL', 'DIN', 'DIRECTOR_NAME', 'DATE_JOIN', 'DESIGNATION', 'DATE_OF_BRITH', 'MOBILE_1', 'MOBILE_2', 'MOBILE_3', 'MOBILE_4', 'MOBILE_5', 'MOBILE_6', 'MOBILE_7', 'EMAIL_1', 'EMAIL_2', 'EMAIL_3', 'EMAIL_4', 'TOTAL_DIRECTORSHIPS', 'DISQUALIFIED_164_2', 'DIN_DEACTIVATED', 'DIRECTOR_EMAIL', 'DIRECTOR_MOBILE']
    
    print("[*] Starting extraction using Tor Proxy (Testing 10 URLs only)...")
    
    # Test Tor Connection
    print("[*] Testing Tor connection...")
    try:
        test_res = session.get("http://httpbin.org/ip", timeout=10)
        print("[+] Tor connection successful!")
    except Exception as e:
        print("\n[!] FATAL ERROR: Tor proxy is NOT running or refused connection.")
        print("[!] Please OPEN TOR BROWSER, wait for it to connect, and then run this script again.")
        print(f"[!] Details: {e}")
        import sys
        sys.exit(1)
        
    test_limit = min(start_idx + 10, len(urls))
    
    for i in range(start_idx, test_limit):
        url = urls[i]
        print(f"[{i+1}/{test_limit}] Fetching details for {url}")
        
        # Change IP every 10 fetches
        if i > start_idx and i % 10 == 0:
            renew_tor_ip()
            
        data, success = extract_detailed_data(url)
        
        data["ROC"] = df.iloc[i]["Company ROC"] if "Company ROC" in df.columns else ""
        if success:
            detailed_records.append(data)
        else:
            print(f"    [!] Skipping record {url} due to extraction failure.")
            continue
        
        # Save every 10 records
        if (i + 1) % 10 == 0:
            temp_df = pd.DataFrame(detailed_records)
            for col in expected_headers:
                if col not in temp_df.columns: temp_df[col] = ""
            temp_df = temp_df[[c for c in expected_headers if c in temp_df.columns]]
            temp_df.to_csv(output_csv, index=False, encoding='utf-8-sig')
            print(f"    [💾] Auto-saved {i+1} records.")
            
    final_df = pd.DataFrame(detailed_records)
    for col in expected_headers:
        if col not in final_df.columns: final_df[col] = ""
    final_df = final_df[[c for c in expected_headers if c in final_df.columns]]
    final_df.to_csv(output_csv, index=False, encoding='utf-8-sig')
    
    print(f"\n[Done] Detailed data saved to: {output_csv}")

if __name__ == "__main__":
    main()
