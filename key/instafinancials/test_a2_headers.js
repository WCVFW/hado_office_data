const axios = require('axios');
const cheerio = require('cheerio');
axios.get('https://www.instafinancials.com/Companies/A/CompanyList_A2.html', {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
    }
}).then(r=>{
    const $ = cheerio.load(r.data);
    console.log("Footable length:", $('table.footable tbody tr').length);
    console.log("Any table length:", $('table tbody tr').length);
    if ($('table.footable').length === 0) {
        console.log("No footable found. Table classes:");
        $('table').each((i, el) => console.log($(el).attr('class')));
    }
}).catch(console.error);
