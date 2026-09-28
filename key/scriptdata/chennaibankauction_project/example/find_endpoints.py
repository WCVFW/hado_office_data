import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
import json
import time

def fetch_wordpress_endpoints(base_url):
    print(f"Scanning for available API endpoints on {base_url} using headless browser...")
    options = uc.ChromeOptions()
    options.add_argument('--headless')
    driver = uc.Chrome(options=options, version_main=149)
    
    api_url = f"{base_url.rstrip('/')}/wp-json/"
    
    try:
        driver.get(api_url)
        time.sleep(3) # Wait for Cloudflare validation if any
        
        # Get the JSON text from the page body
        body = driver.find_element(By.TAG_NAME, "body").text
        
        try:
            data = json.loads(body)
            routes = data.get("routes", {})
            
            # Extract all the paths
            available_urls = list(routes.keys())
            
            # Sort them alphabetically
            available_urls.sort()
            
            print(f"Found {len(available_urls)} available endpoints!")
            
            # Save to a text file
            filename = "available_endpoints.txt"
            with open(filename, "w", encoding="utf-8") as f:
                f.write(f"--- Available WordPress REST API Endpoints for {base_url} ---\n\n")
                for route in available_urls:
                    # Construct full URL
                    full_url = f"{api_url.rstrip('/')}{route}"
                    f.write(f"{full_url}\n")
            
            print(f"Successfully saved all endpoints to {filename}")
            
        except json.JSONDecodeError:
            print(f"Failed to parse JSON. Website might be blocking the request. Response text:\n{body[:500]}")
            
    except Exception as e:
        print(f"Error occurred: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    target_site = "https://chennaibankauction.com"
    fetch_wordpress_endpoints(target_site)
