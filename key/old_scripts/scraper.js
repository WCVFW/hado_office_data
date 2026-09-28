const { Builder, By, until, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

async function scrapeWithLogin() {
  console.log("Starting Selenium scraper with login...");
  
  let options = new chrome.Options();
  options.addArguments('--headless'); 
  options.addArguments('--disable-gpu');
  options.addArguments('--no-sandbox');
  options.addArguments('--window-size=1920,1080'); // Large window for modal

  let driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

  try {
    console.log("Navigating to https://finanvo.in...");
    await driver.get('https://finanvo.in');
    
    // Wait for the app to load
    await driver.sleep(3000);

    console.log("Looking for LOGIN button...");
    // Find LOGIN element and click
    let links = await driver.findElements(By.css('*'));
    let loginBtn = null;
    for (let el of links) {
        let text = await el.getText();
        if (text && text.trim() === 'LOGIN') {
            loginBtn = el;
            break;
        }
    }
    
    if (loginBtn) {
        console.log("Clicking LOGIN...");
        await loginBtn.click();
        await driver.sleep(2000);
    } else {
        console.log("Could not find LOGIN button, maybe it's under a different name or already logged in.");
    }

    console.log("Waiting for email/username input field...");
    // Find email input
    let emailInput = await driver.wait(until.elementLocated(By.css('input[type="email"], input[type="text"], input[formcontrolname="email"]')), 5000);
    await emailInput.sendKeys('deepakcalzone@gmail.com');

    // Find password input
    let pwdInput = await driver.findElement(By.css('input[type="password"]'));
    await pwdInput.sendKeys('Passw0rd@12345', Key.RETURN);

    console.log("Submitted login. Waiting for dashboard to load...");
    await driver.sleep(10000); // Wait for API response and redirect

    console.log("Extracting logged-in data...");
    let pageSource = await driver.getPageSource();
    fs.writeFileSync('finanvo_dashboard.html', pageSource);
    console.log("Saved dashboard HTML to finanvo_dashboard.html");

    // Save a screenshot just to be sure
    let image = await driver.takeScreenshot();
    fs.writeFileSync('dashboard.png', image, 'base64');
    console.log("Saved dashboard screenshot to dashboard.png");

  } catch (error) {
    console.error("An error occurred during scraping:", error);
    try {
        let image = await driver.takeScreenshot();
        fs.writeFileSync('error_screenshot.png', image, 'base64');
        console.log("Saved error screenshot to error_screenshot.png");
    } catch(e) {}
  } finally {
    console.log("Closing browser...");
    await driver.quit();
  }
}

scrapeWithLogin();
