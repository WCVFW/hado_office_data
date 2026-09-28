import undetected_chromedriver as uc
import json
import sys
import time

# You can either paste your URL here directly, or pass it in the terminal!
url = "https://chennaibankauction.com/wp-json/wp/v2/media?parent=132631"

if len(sys.argv) > 1:
    url = sys.argv[1].strip()

if not url:
    print("No URL provided. Exiting.")
    sys.exit()
    
print(f"Target URL: {url}")

print("Starting browser to bypass Cloudflare and fetch data...", flush=True)

# Setup Chrome
options = uc.ChromeOptions()
options.add_argument('--headless')
driver = uc.Chrome(options=options, version_main=149)

try:
    driver.get(url)
    time.sleep(3) # Wait for page and Cloudflare to load
    
    # Extract the raw JSON text from the browser
    body_text = driver.execute_script("return document.body.innerText;")
    
    try:
        data = json.loads(body_text)
        
        print("\n" + "="*50)
        print("EXTRACTED URLs (guid -> rendered):")
        print("="*50)
        
        count = 0
        if isinstance(data, list):
            for item in data:
                guid_url = item.get("guid", {}).get("rendered", "")
                if guid_url:
                    print(f"- {guid_url}")
                    count += 1
            if count == 0:
                print("No URLs found in the data.")
        elif isinstance(data, dict):
            # Just in case they provide a single item API instead of a list
            guid_url = data.get("guid", {}).get("rendered", "")
            if guid_url:
                print(f"- {guid_url}")
            else:
                print("No URL found in the data.")
        else:
            print("Invalid Data Format returned from the URL.")
            
        print("="*50 + "\n")
        
    except json.JSONDecodeError:
        print("\nError: The URL did not return valid JSON. It might be blocked by Cloudflare or incorrect.")
        print("Raw Output:", body_text[:200])

except Exception as e:
    print(f"\nUnexpected Error: {e}")
finally:
    driver.quit()
