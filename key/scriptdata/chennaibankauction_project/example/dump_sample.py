import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
import json

options = uc.ChromeOptions()
options.add_argument('--headless')
driver = uc.Chrome(options=options, version_main=149)
try:
    driver.get('https://chennaibankauction.com/wp-json/wp/v2/posts?per_page=1&page=1&_embed=1')
    import time; time.sleep(5)
    data = driver.find_element(By.TAG_NAME, 'body').text
    with open('sample_post.json', 'w', encoding='utf-8') as f:
        f.write(data)
finally:
    driver.quit()
