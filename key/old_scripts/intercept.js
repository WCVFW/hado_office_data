const puppeteer = require('puppeteer');
const fs = require('fs');

async function intercept() {
  console.log("Starting Puppeteer Interceptor...");
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  let authToken = null;
  let apiEndpoints = new Set();

  await page.setRequestInterception(true);
  
  page.on('request', request => {
    const url = request.url();
    const headers = request.headers();
    
    // Check if it's an API call
    if (url.includes('api') || url.includes('search') || url.includes('company') || url.includes('director')) {
        apiEndpoints.add(url);
        if (headers['authorization'] || headers['Authorization']) {
            authToken = headers['authorization'] || headers['Authorization'];
        }
    }
    request.continue();
  });

  try {
    console.log("Navigating...");
    await page.goto('https://finanvo.in', { waitUntil: 'networkidle2' });

    console.log("Looking for LOGIN...");
    const loginLinks = await page.$$('a, button');
    for (let el of loginLinks) {
        const text = await page.evaluate(e => e.innerText, el);
        if (text && text.trim() === 'LOGIN') {
            await el.click();
            break;
        }
    }

    await new Promise(r => setTimeout(r, 2000));

    console.log("Entering credentials...");
    // Find email and password fields
    await page.type('input[type="email"], input[formcontrolname="email"]', 'deepakcalzone@gmail.com');
    await page.type('input[type="password"]', 'Passw0rd@12345');
    await page.keyboard.press('Enter');

    console.log("Waiting for dashboard...");
    await page.waitForNavigation({ waitUntil: 'networkidle2' }).catch(() => {});
    await new Promise(r => setTimeout(r, 5000));

    console.log("Auth Token Found:", authToken ? "Yes" : "No");
    
    fs.writeFileSync('intercepted_data.json', JSON.stringify({
        authToken: authToken,
        endpoints: Array.from(apiEndpoints)
    }, null, 2));
    
    console.log("Saved interception results to intercepted_data.json");

  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
}

intercept();
