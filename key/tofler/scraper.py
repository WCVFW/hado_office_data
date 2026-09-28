import json
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

def capture_tofler_api():
    print("Setting up Chrome...")
    # Setup Chrome options
    chrome_options = Options()
    # Enable performance logging to capture network requests (APIs)
    chrome_options.set_capability("goog:loggingPrefs", {"performance": "ALL"})
    
    # Initialize the WebDriver
    # Note: Modern Selenium handles the chromedriver automatically
    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        print("Opening Tofler website...")
        driver.get("https://www.tofler.in/")
        time.sleep(3) # Wait for page to load
        
        # Find the search box and type a company name to trigger an API call
        print("Typing in search box to trigger API...")
        search_box = driver.find_element(By.ID, "searchbox")
        search_box.send_keys("Tata")
        
        # Wait a couple of seconds for the suggestion API to trigger
        time.sleep(3) 
        
        print("Extracting network logs...")
        # Get all performance logs from the browser
        logs = driver.get_log("performance")
        
        api_requests = []
        
        for entry in logs:
            log = json.loads(entry["message"])["message"]
            
            # Look for outgoing network requests
            if log["method"] == "Network.requestWillBeSent":
                request = log["params"]["request"]
                url = request["url"]
                
                # Filter to find the API calls (ignoring images, css, etc.)
                if "suggest" in url.lower() or "search" in url.lower() or "api" in url.lower():
                     api_requests.append({
                         "url": url,
                         "method": request["method"],
                         "headers": request.get("headers", {})
                     })
                     print(f"Captured API Request: {url}")
                     
        # Save the captured APIs to a JSON file in the same directory
        output_file = "E:\\office\\key\\tofler\\captured_apis.json"
        with open(output_file, "w") as f:
            json.dump(api_requests, f, indent=4)
            
        print(f"\nSuccess! Saved captured API details to {output_file}")
            
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        # Close the browser
        print("Closing browser...")
        driver.quit()

if __name__ == "__main__":
    capture_tofler_api()
