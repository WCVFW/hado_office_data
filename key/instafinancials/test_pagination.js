const fs = require('fs');
const html = fs.readFileSync('C:/Users/praka/.gemini/antigravity-ide/brain/3a0e39e7-5dd8-4c08-8a7e-a82b31b9461c/.system_generated/steps/9/content.md', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html);
console.log("Pagination:", $('.pagination').html());
