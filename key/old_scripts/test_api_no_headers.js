const https = require('https');

const url = 'https://api5.finanvo.in/search/company?query=tata';

https.get(url, (res) => {
    console.log('Status:', res.statusCode);
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log('Response:', data);
    });
}).on('error', err => console.error(err));
