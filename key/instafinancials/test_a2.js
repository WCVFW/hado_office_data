const axios = require('axios');
const cheerio = require('cheerio');
axios.get('https://www.instafinancials.com/Companies/A/CompanyList_A2.html').then(r=>{
    const $ = cheerio.load(r.data); 
    console.log("A2 table length:", $('table.footable tbody tr').length);
}).catch(console.error);
