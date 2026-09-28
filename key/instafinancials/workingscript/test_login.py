from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import re

options = webdriver.ChromeOptions()
options.add_argument('--headless')
driver = webdriver.Chrome(options=options)

try:
    print('Loading InstaFinancials login page...')
    # From earlier findings, login is at /insta-user/login.aspx? (wait, that was 404)
    # The actual login page for InstaFinancials might be different. Let's just go to main page and find login link.
    driver.get('https://www.instafinancials.com/')
    time.sleep(3)
    
    print('Clicking Login link...')
    links = driver.find_elements(By.TAG_NAME, 'a')
    clicked = False
    for link in links:
        if link.text.strip().lower() == 'login':
            driver.get(link.get_attribute('href'))
            clicked = True
            break
            
    if not clicked:
        print("Could not find Login link on homepage.")
        
    time.sleep(3)
    
    print('Looking for email/password inputs...')
    inputs = driver.find_elements(By.TAG_NAME, 'input')
    email_found = False
    pass_found = False
    for i in inputs:
        type_attr = i.get_attribute('type')
        id_attr = i.get_attribute('id') or ''
        name_attr = i.get_attribute('name') or ''
        
        if (type_attr == 'email' or 'email' in id_attr.lower() or 'email' in name_attr.lower()) and not email_found:
            i.send_keys('deepakcalzone@gmail.com')
            email_found = True
        elif (type_attr == 'password' or 'password' in id_attr.lower() or 'password' in name_attr.lower()) and not pass_found:
            i.send_keys('Passw0rd@12345')
            pass_found = True
            
    print(f"Inputs found? Email: {email_found}, Password: {pass_found}")
            
    # Click the submit button
    buttons = driver.find_elements(By.TAG_NAME, 'button')
    inputs_btn = driver.find_elements(By.TAG_NAME, 'input')
    submitted = False
    for b in buttons:
        if 'login' in b.text.lower() or 'submit' in b.text.lower():
            b.click()
            submitted = True
            break
            
    if not submitted:
        for b in inputs_btn:
            type_attr = b.get_attribute('type')
            val = b.get_attribute('value') or ''
            if type_attr == 'submit' or 'login' in val.lower():
                b.click()
                submitted = True
                break
                
    print('Waiting for login to process...')
    time.sleep(5)
    
    print('Current URL after login:', driver.current_url)
    
    print('Navigating to director page...')
    driver.get('https://www.instafinancials.com/director/lala-prasad-singh-07650553')
    time.sleep(3)
    
    html = driver.page_source
    emails = re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', html)
    mobiles = re.findall(r'\b[6789]\d{9}\b', html)
    
    clean_em = [e for e in emails if 'instafinancials.com' not in e.lower() and e.lower() not in ['support@instacart.in', 'cs@instafinancials.com']]
    clean_mo = [m for m in mobiles if m not in ['8792827285', '7337375276']]
    
    print('Director Emails after login:', list(set(clean_em)))
    print('Director Mobiles after login:', list(set(clean_mo)))
    
except Exception as e:
    print('Error:', e)
finally:
    driver.quit()
