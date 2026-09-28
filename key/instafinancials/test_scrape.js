const axios = require('axios');
const cheerio = require('cheerio');
axios.get('https://www.instafinancials.com/Companies/A/CompanyList_A1.html')
  .then(r => {
    const $ = cheerio.load(r.data);
    const companies = [];
    $('.compList tr').each((i, el) => {
       // Just guessing table structure, let's dump HTML if needed
       if (i === 1) console.log($(el).html());
    });
    
    // Better yet, just find all links to company profile
    const links = $('a[href*="/company/"]').slice(0, 10).map((i, el) => {
       return { name: $(el).text().trim(), url: $(el).attr('href') };
    }).get();
    console.log(links);
  })
  .catch(console.error);
