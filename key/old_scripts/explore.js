const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function explore() {
  let options = new chrome.Options();
  options.addArguments('--headless');
  options.addArguments('--disable-gpu');
  options.addArguments('--no-sandbox');

  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {
    await driver.get('https://finanvo.in');
    await driver.sleep(5000);
    
    // Find all links
    let links = await driver.findElements(By.css('a'));
    for (let link of links) {
        let text = await link.getText();
        let href = await link.getAttribute('href');
        if (text.toLowerCase().includes('login') || (href && href.toLowerCase().includes('login'))) {
            console.log("Found login link:", text, href);
        }
    }
  } catch (err) {
    console.error(err);
  } finally {
    await driver.quit();
  }
}
explore();
