import pandas as pd
import os
import time
import re
import json
from bs4 import BeautifulSoup
from curl_cffi import requests as cffi_requests

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36",
    "Cookie": "wordpress_eaac68859d26adf343b3c13f0072bb62=deepakcalzone%7C1782297338%7CZBiuRROA1DNAxWtvZJZuyTN7v3bGMNlwHDJXGR1UIvt%7Cba5f011071881f587e6bd18a3a65427aff8aa4f279e02195a26489afff5e8a89; wordpress_sec_eaac68859d26adf343b3c13f0072bb62=deepakcalzone%7C1782297338%7Caio297y0SrQAmNZMFvwJElFbGNCOdg8kPEsl1OqZaHf%7Cfb1462aa330b357ab431e889c01117767a73dc6a9b0312a1fffd79e60f058f30; sbjs_migrations=1418474375998%3D1; sbjs_current_add=fd%3D2026-06-22%2009%3A06%3A05%7C%7C%7Cep%3Dhttps%3A%2F%2Fchennaibankauction.com%2F%7C%7C%7Crf%3D%28none%29; sbjs_first_add=fd%3D2026-06-22%2009%3A06%3A05%7C%7C%7Cep%3Dhttps%3A%2F%2Fchennaibankauction.com%2F%7C%7C%7Crf%3D%28none%29; sbjs_current=typ%3Dtypein%7C%7C%7Csrc%3D%28direct%29%7C%7C%7Cmdm%3D%28none%29%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29%7C%7C%7Cid%3D%28none%29%7C%7C%7Cplt%3D%28none%29%7C%7C%7Cfmt%3D%28none%29%7C%7C%7Ctct%3D%28none%29; sbjs_first=typ%3Dtypein%7C%7C%7Csrc%3D%28direct%29%7C%7C%7Cmdm%3D%28none%29%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29%7C%7C%7Cid%3D%28none%29%7C%7C%7Cplt%3D%28none%29%7C%7C%7Cfmt%3D%28none%29%7C%7C%7Ctct%3D%28none%29; sbjs_udata=vst%3D1%7C%7C%7Cuip%3D%28none%29%7C%7C%7Cuag%3DMozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F149.0.0.0%20Safari%2F537.36; PHPSESSID=jv15qat7sqfihjplqkoqkfabo1; wordpress_test_cookie=WP%20Cookie%20check; arm_cookie_2211=jv15qat7sqfihjplqkoqkfabo1%7C%7C38211; wordpress_logged_in_eaac68859d26adf343b3c13f0072bb62=deepakcalzone%7C1782297338%7Caio297y0SrQAmNZMFvwJElFbGNCOdg8kPEsl1OqZaHf%7C778367697bc91b5d7a7d25b63059a56c7cdc6b4a1c3d43c4547b2f6f9f364dfd; sbjs_session=pgs%3D16%7C%7C%7Ccpg%3Dhttps%3A%2F%2Fchennaibankauction.com%2F"
}
PROXIES = {}

def parse_property(url):
    result = {
        "Reserve Price": "",
        "EMD Amount": "",
        "Auction Date": "",
        "EMD Submission Date": "",
        "Bank / Institution": "",
        "Borrower Name": "",
        "Contact Details": "",
        "Documents Available": "",
        "Sale Notice URL": "",
    }
    try:
        r = cffi_requests.get(url, headers=HEADERS, proxies=PROXIES, impersonate="chrome", timeout=30)
        soup = BeautifulSoup(r.text, "lxml")
        
        text = soup.get_text(" ", strip=True)
        patterns = {
            "Reserve Price": r"Reserve Price\s*₹?\s*([\d,]+)",
            "EMD Amount": r"EMD Amount\s*₹?\s*([\d,]+)",
            "Auction Date": r"Auction Date\s*(\d{2}/\d{2}/\d{4})",
            "EMD Submission Date": r"EMD Submission Date\s*(\d{2}/\d{2}/\d{4})",
            "Bank / Institution": r"Bank\s*/\s*Institution\s*(.+?)\s*Borrower Name",
            "Borrower Name": r"Borrower Name\s*(.+?)\s*Contact Details",
            "Contact Details": r"Contact Details\s*(.+)"
        }
        for field, pattern in patterns.items():
            m = re.search(pattern, text, re.I)
            if m:
                result[field] = m.group(1).strip()
        
        pdf_links = []
        from urllib.parse import urljoin
        for a in soup.find_all("a", href=True):
            href = a["href"]
            text_lower = a.get_text(strip=True).lower()
            if ".pdf" in href.lower() or "download" in text_lower and "sale notice" in text_lower:
                pdf_links.append(urljoin(url, href))
                
        if pdf_links:
            result["Sale Notice URL"] = pdf_links[0]
            result["Documents Available"] = "PDF Available"
            
        return result
    except Exception as e:
        print("ERROR:", url, e)
        return result

if __name__ == "__main__":
    output_dir = r'E:\office\key\scriptdata\documents'

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    url = input("Enter the property URL or Sale Notice PDF URL: ").strip()

    if not url:
        print("Invalid URL.")
    else:
        print(f"Processing URL: {url}")
        
        if url.lower().endswith('.pdf'):
            # The user provided the PDF URL directly
            pdf_url = url
            print("  -> Direct PDF URL provided.")
        else:
            # The user provided the property page, scrape it to find the PDF link
            out = parse_property(url)
            pdf_url = out.get("Sale Notice URL")
        
        if pdf_url:
            print(f"  -> Downloading PDF URL: {pdf_url}")
            # Try to extract a meaningful ID from the URL, or fallback to timestamp
            try:
                post_id = [x for x in pdf_url.rstrip('/').split('/') if x][-1].replace('.pdf', '')
            except:
                post_id = str(int(time.time()))
                
            try:
                pdf_resp = cffi_requests.get(pdf_url, headers=HEADERS, proxies=PROXIES, impersonate="chrome", timeout=60)
                if pdf_resp.status_code == 200:
                    file_path = os.path.join(output_dir, f"{post_id}.pdf")
                    with open(file_path, "wb") as f:
                        f.write(pdf_resp.content)
                    print(f"  -> Downloaded successfully as {file_path}")
                else:
                    print(f"  -> Failed to download PDF. Status: {pdf_resp.status_code}")
            except Exception as e:
                print(f"  -> Download ERROR: {e}")
        else:
            print("  -> No PDF found (Check if login token/cookie is expired or no document available).")
