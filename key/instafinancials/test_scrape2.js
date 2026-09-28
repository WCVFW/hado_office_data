const axios = require('axios');
const cheerio = require('cheerio');
axios.get('https://www.instafinancials.com/Companies/A/CompanyList_A1.html')
  .then(r => {
    const $ = cheerio.load(r.data);
    const pagination = [];
    $('.pagination a').each((i, el) => {
       pagination.push({ text: $(el).text().trim(), url: $(el).attr('href') });
    });
    console.log("Pagination links:");
    console.log(pagination);
  })
  .catch(console.error);
