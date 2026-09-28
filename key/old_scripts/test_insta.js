const axios = require('axios');
const cheerio = require('cheerio');

async function testInsta() {
    try {
        const res = await axios.get('https://www.instafinancials.com/company/mindsmatter-consulting-private-limited-u85100mh2020ptc342474');
        const $ = cheerio.load(res.data);
        console.log('Email:', $('td:contains("Email")').next('td').text().trim() || $('th:contains("Email")').next('td').text().trim());
        console.log('SubCategory:', $('td:contains("Sub Category")').next('td').text().trim() || $('th:contains("Sub Category")').next('td').text().trim());
        console.log('Activity:', $('td:contains("Activity")').next('td').text().trim() || $('th:contains("Activity")').next('td').text().trim());
    } catch (e) {
        console.log('Main ERR:', e.message);
    }
    
    try {
        const res2 = await axios.get('https://www.instafinancials.com/company/mindsmatter-consulting-private-limited-u85100mh2020ptc342474/company-directors');
        const $2 = cheerio.load(res2.data);
        const directors = [];
        $2('table#directordet tbody tr').each((i, el) => {
            const name = $2(el).find('td').eq(0).text().trim();
            const din = $2(el).find('td').eq(1).text().trim();
            const designation = $2(el).find('td').eq(2).text().trim();
            if(name) directors.push({name, din, designation});
        });
        console.log('Directors:', directors);
    } catch (e) {
        console.log('Dir ERR:', e.message);
    }
}
testInsta();
