const axios = require('axios');
const cheerio = require('cheerio');
const xlsx = require('xlsx');
const fs = require('fs');

// Settings
const CONCURRENCY_LIMIT = 2; // Reduced to avoid IP ban
const DELAY_BETWEEN_BATCHES = 5000; // 5 seconds delay to be safe
const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0".split(""); // 0 is for "Others" if any
const START_LETTER = 'A'; 
const END_LETTER = 'Z'; 

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchPage(letter, pageNo, retries = 3) {
    const url = `https://www.instafinancials.com/Companies/${letter}/CompanyList_${letter}${pageNo}.html`;
    try {
        console.log(`[+] Fetching ${letter} - Page ${pageNo}...`);
        const response = await axios.get(url, {
            timeout: 15000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9'
            }
        });

        const $ = cheerio.load(response.data);
        const rows = $('table.footable tbody tr');
        
        // Anti-bot check: If the page loaded but there is no table, we are probably blocked
        if (rows.length === 0 && response.data.includes('Captcha')) {
             throw new Error("Captcha blocked!");
        }

        if (rows.length === 0) {
            return { data: [], hasNext: false };
        }

        const companies = [];
        rows.each((i, el) => {
            const tds = $(el).find('td');
            if(tds.length >= 4) {
                const cin = $(tds[0]).text().trim();
                const name = $(tds[1]).text().trim();
                const url = $(tds[1]).find('a').attr('href');
                const roc = $(tds[2]).text().trim();
                const status = $(tds[3]).text().trim();

                if (cin && name && url) {
                    companies.push({
                        "Company CIN": cin,
                        "Company Name": name,
                        "Company ROC": roc,
                        "Company Status": status,
                        "URL": url.startsWith('http') ? url : `https://www.instafinancials.com${url}`
                    });
                }
            }
        });

        return { data: companies, hasNext: true };
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return { data: [], hasNext: false }; // End of pages
        }
        if (retries > 0) {
            console.log(`[-] Error fetching ${letter} Page ${pageNo} (${error.message}), retrying... (${retries} left)`);
            await delay(5000); // Wait longer on error
            return fetchPage(letter, pageNo, retries - 1);
        } else {
            console.error(`[!] Failed to fetch ${letter} Page ${pageNo}.`);
            return { data: [], hasNext: false, error: true };
        }
    }
}

async function scrapeInstaDirectory() {
    console.log("==========================================");
    console.log(" InstaFinancials Directory Extractor      ");
    console.log("==========================================");

    const startIndex = ALPHABETS.indexOf(START_LETTER);
    const endIndex = ALPHABETS.indexOf(END_LETTER);
    const targetAlphabets = ALPHABETS.slice(startIndex, endIndex + 1);

    // Create a new workbook to hold all sheets
    const workbook = xlsx.utils.book_new();

    for (const letter of targetAlphabets) {
        console.log(`\n>>> Starting Extraction for Letter: ${letter} <<<`);
        let pageNo = 1;
        let allCompaniesForLetter = [];
        let hasNextPage = true;

        while (hasNextPage) {
            const pagesToFetch = Array.from({ length: CONCURRENCY_LIMIT }, (_, i) => pageNo + i);
            const results = await Promise.all(
                pagesToFetch.map(p => fetchPage(letter, p))
            );

            let blockDetected = false;
            for (let i = 0; i < results.length; i++) {
                if (results[i].error) {
                    blockDetected = true;
                }
                if (results[i].data && results[i].data.length > 0) {
                    allCompaniesForLetter.push(...results[i].data);
                }
                if (results[i].hasNext === false) {
                    hasNextPage = false;
                }
            }

            if (blockDetected) {
                console.log("! IP Block or Error detected. Saving current progress and exiting loop for safety.");
                hasNextPage = false;
            }

            if (hasNextPage) {
                pageNo += CONCURRENCY_LIMIT;
                await delay(DELAY_BETWEEN_BATCHES); 
            }
        }

        console.log(`\n[✔] Finished Letter ${letter}. Extracted ${allCompaniesForLetter.length} companies.`);
        
        if (allCompaniesForLetter.length > 0) {
            const worksheet = xlsx.utils.json_to_sheet(allCompaniesForLetter);
            xlsx.utils.book_append_sheet(workbook, worksheet, `Sheet_${letter}`);
        }
    }
    
    const finalFilename = "InstaFinancials_All_Companies.xlsx";
    try {
        xlsx.writeFile(workbook, finalFilename);
        console.log(`\n✅ All scraping completed! Data saved to ${finalFilename}`);
    } catch (e) {
        console.error(`\n[!] Error saving final Excel file: ${e.message}`);
    }
}

scrapeInstaDirectory();
