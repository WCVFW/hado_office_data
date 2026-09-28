const axios = require('axios');
const fs = require('fs');
const content = fs.readFileSync('detailed_scraper.js', 'utf8');
const tokenMatch = content.match(/const AUTH_TOKEN = \"([^\"]+)\"/);
const token = tokenMatch ? tokenMatch[1] : '';

axios.get('https://api5.finanvo.in/company/directors?CIN=U85110KA2018PTC119289', { headers: { 'Authorization': token } })
.then(res => console.log('DIR:', JSON.stringify(res.data).substring(0,200)))
.catch(e => console.log('DIR ERR:', e.response ? e.response.status : e.message));

axios.get('https://api5.finanvo.in/company/basic?CIN=U85110KA2018PTC119289', { headers: { 'Authorization': token } })
.then(res => console.log('BASIC:', JSON.stringify(res.data).substring(0,200)))
.catch(e => console.log('BASIC ERR:', e.response ? e.response.status : e.message));
