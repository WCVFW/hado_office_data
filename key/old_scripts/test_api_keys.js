const https = require('https');

const url = 'https://api5.finanvo.in/search/company?query=tata';

https.get(url, {
    headers: {
        'x-api-key': 'finanvo',
        'x-api-secret-key': '6c13cc89165ce86ea6cbf4f5004b36b1e3f3126ddc6821f7adcf11ee2bbff59e',
        'app-origin': 'https://finanvo.in'
    }
}, (res) => {
    console.log('Status:', res.statusCode);
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log('Response:', data);
    });
}).on('error', err => console.error(err));
