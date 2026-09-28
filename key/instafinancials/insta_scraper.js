const axios = require('axios');
const fs = require('fs');
const xlsx = require('xlsx');
const cheerio = require('cheerio');

// INGA UNGA PUTHU FINANVO TOKEN AH PODUNGA (eyJhb... nu perusa irukkum. Ithu InstaAuthID kedaiyathu!)
const AUTH_TOKEN = "oqjp2aeerbt3mdv0zaida3te"; // <--- CHANGE THIS BACK TO THE LONG FINANVO JWT TOKEN
const DETAILED_API_BASE_URL = "https://api5.finanvo.in/company/profile?CIN=";

// Instafinancials Cookies (Neenga anupunathu)
const INSTA_COOKIES = "InstaAuthID=oqjp2aeerbt3mdv0zaida3te; _clck=176hopt%5E2%5Eg7q%5E0%5E2367; MobileRequest=False";

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper to get text from Instafinancials HTML
function getInstaField($, label) {
    let val = $(`td:contains("${label}")`).next('td').text().trim();
    if (!val) val = $(`th:contains("${label}")`).next('td').text().trim();
    return val;
}

async function scrapeDetailedData() {
    console.log("Starting Finanvo + Instafinancials Scraper...");
    
    if (!fs.existsSync('../finanvo/companies_data.json')) {
        console.error("companies_data.json file kidaikala in ../finanvo!");
        return;
    }

    const companies = JSON.parse(fs.readFileSync('../finanvo/companies_data.json', 'utf8'));
    console.log(`Total companies to process: ${companies.length}`);

    let finalExcelData = [];

    // Math.min(10, companies.length) for testing first 10
    for (let i = 0; i < Math.min(10, companies.length); i++) {
        const cin = companies[i].dataid;
        const name = companies[i].name;
        console.log(`\n[${i+1}/${companies.length}] Processing CIN: ${cin}...`);
        
        let row = {
            "CIN": cin,
            "COMPANY_NAME": name,
            "DATE_OF_REGISTRATION": "",
            "PINCODE": "",
            "CITY": "",
            "STATE": "",
            "COUNTRY": "India",
            "ROC": "",
            "CATEGORY": "",
            "CLASS": "",
            "SUBCATEGORY": "",
            "AUTHORIZED_CAPITAL": "",
            "PAIDUP_CAPITAL": "",
            "TOTAL_OBLIGATION_CONTRIBUTION": "",
            "ACTIVITY_CODE": "",
            "ACTIVITY_DESCRIPTION": "",
            "REGISTERED_OFFICE_ADDRESS": "",
            "ADDRESS_OTHER_THAN_RO": "",
            "COMPANY_EMAIL": "",
            "DIN": "",
            "DIRECTOR_NAME": "",
            "DATE_JOIN": "",
            "DESIGNATION": "",
            "DATE_OF_BRITH": "",
            "MOBILE_1": "",
            "MOBILE_2": "",
            "MOBILE_3": "",
            "MOBILE_4": "",
            "MOBILE_5": "",
            "MOBILE_6": "",
            "MOBILE_7": "",
            "EMAIL_1": "",
            "EMAIL_2": "",
            "EMAIL_3": "",
            "EMAIL_4": ""
        };

        // 1. Fetch from FINANVO API for the bulk of the data
        try {
            console.log(" -> Fetching Finanvo API...");
            const response = await axios.get(`${DETAILED_API_BASE_URL}${cin}`, {
                headers: { 'Authorization': AUTH_TOKEN, 'Content-Type': 'application/json' },
                timeout: 10000
            });
            const data = response.data.data || response.data;
            if (data && data.COMPANY_NAME) {
                row["DATE_OF_REGISTRATION"] = data.DATE_OF_REGISTRATION || "";
                row["PINCODE"] = data.PINCODE || (data.MULTIPLE_ADDRESS && data.MULTIPLE_ADDRESS[0] ? data.MULTIPLE_ADDRESS[0].postalCode : "");
                row["CITY"] = data.CITY || (data.MULTIPLE_ADDRESS && data.MULTIPLE_ADDRESS[0] ? data.MULTIPLE_ADDRESS[0].city : "");
                row["STATE"] = data.STATE || (data.MULTIPLE_ADDRESS && data.MULTIPLE_ADDRESS[0] ? data.MULTIPLE_ADDRESS[0].state : "");
                row["COUNTRY"] = data.COUNTRY || (data.MULTIPLE_ADDRESS && data.MULTIPLE_ADDRESS[0] ? data.MULTIPLE_ADDRESS[0].country : "India");
                row["ROC"] = data.ROC || "";
                row["CATEGORY"] = data.CATEGORY || "";
                row["CLASS"] = data.CLASS || "";
                row["AUTHORIZED_CAPITAL"] = data.AUTHORIZED_CAPITAL || "";
                row["PAIDUP_CAPITAL"] = data.PAIDUP_CAPITAL || "";
                row["TOTAL_OBLIGATION_CONTRIBUTION"] = data.TOTAL_OBLIGATION_CONTRIBUTION || "";
                row["ACTIVITY_CODE"] = data.activityCode_val || data.ACTIVITY_CODE || "";
                row["REGISTERED_OFFICE_ADDRESS"] = data.REGISTERED_OFFICE_ADDRESS || "";
                row["ADDRESS_OTHER_THAN_RO"] = data.ADDRESS_OTHER_THAN_RO || "";
                row["MOBILE_1"] = data.MOBILE_1 || "";
                row["EMAIL_1"] = data.EMAIL_1 || "";
            }
        } catch (e) {
            console.log(" -> Finanvo API Error:", e.response ? e.response.status : e.message);
        }

        // 2. Fetch missing fields from INSTAFINANCIALS
        const instaSlug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${cin.toLowerCase()}`;
        const instaBase = `https://www.instafinancials.com/company/${instaSlug}`;
        
        try {
            console.log(" -> Fetching Instafinancials Main Page...");
            const instaMain = await axios.get(instaBase, { 
                headers: { 'Cookie': INSTA_COOKIES },
                timeout: 10000 
            });
            const $main = cheerio.load(instaMain.data);
            
            row["COMPANY_EMAIL"] = getInstaField($main, "Email");
            row["SUBCATEGORY"] = getInstaField($main, "Sub Category");
            
            // For Activity Description, it's often in a specific table
            let actDesc = getInstaField($main, "Activity");
            if(!actDesc) {
               actDesc = getInstaField($main, "Industry");
            }
            row["ACTIVITY_DESCRIPTION"] = actDesc;

        } catch (e) {
            console.log(" -> Instafinancials Main Error:", e.response ? e.response.status : e.message);
        }

        try {
            console.log(" -> Fetching Instafinancials Directors Page...");
            const instaDir = await axios.get(`${instaBase}/company-directors`, { 
                headers: { 'Cookie': INSTA_COOKIES },
                timeout: 10000 
            });
            const $dir = cheerio.load(instaDir.data);
            
            // Extract the first valid director
            $dir('table#directordet tbody tr').each((idx, el) => {
                const dName = $dir(el).find('td').eq(0).text().replace(/\s+/g, ' ').trim();
                const dDin = $dir(el).find('td').eq(1).text().replace(/\s+/g, ' ').trim();
                const dDesig = $dir(el).find('td').eq(2).text().replace(/\s+/g, ' ').trim();
                const dJoin = $dir(el).find('td').eq(3).text().replace(/\s+/g, ' ').trim();
                
                if (dName && !dName.includes("does not have any active directors") && row["DIRECTOR_NAME"] === "") {
                    row["DIRECTOR_NAME"] = dName;
                    row["DIN"] = dDin;
                    row["DESIGNATION"] = dDesig;
                    row["DATE_JOIN"] = dJoin;
                }
            });
        } catch (e) {
            console.log(" -> Instafinancials Directors Error:", e.response ? e.response.status : e.message);
        }

        finalExcelData.push(row);
        await delay(1000); // Respectful delay
    }

    if (finalExcelData.length > 0) {
        console.log("\nPreparing Excel file...");
        const worksheet = xlsx.utils.json_to_sheet(finalExcelData);
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, "Company_Details");
        
        const outPath = "Instafinancials_Detailed_Report.xlsx";
        try {
            xlsx.writeFile(workbook, outPath);
            console.log(`✅ Success! Excel file saved as E:\\office\\key\\instafinancials\\${outPath}`);
        } catch (e) {
             console.error("Error writing Excel:", e.message);
        }
    } else {
        console.log("No data extracted.");
    }
}

scrapeDetailedData();
