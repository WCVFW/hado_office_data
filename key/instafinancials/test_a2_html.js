const axios = require('axios');
axios.get('https://www.instafinancials.com/Companies/A/CompanyList_A2.html').then(r=>{
    console.log(r.data);
}).catch(console.error);
