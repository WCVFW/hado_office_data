const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Excel-ku badhila namma JSON file laye idhe data iruka nala adhaiye use panrom (read panra process easy)
const dataPath = path.join(__dirname, 'finanvo', 'companies_data.json');
const profilesDir = path.join(__dirname, 'finanvo', 'profiles');

// Profiles save panna folder create panrom
if (!fs.existsSync(profilesDir)) {
    fs.mkdirSync(profilesDir, { recursive: true });
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Name-ah url format-ku matha (spaces ah hyphens ah matha)
function formatNameForUrl(name) {
    if (!name) return '';
    return name.trim().replace(/\s+/g, '-');
}

async function scrapeProfiles() {
    if (!fs.existsSync(dataPath)) {
        console.error("companies_data.json file kidaikala! First mass_scraper.js run pannunga.");
        return;
    }

    const companies = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    console.log(`Total ${companies.length} companies kidaichuruku.`);

    // Loop through each company
    for (let i = 0; i < companies.length; i++) {
        const company = companies[i];
        
        // Check if dataid and name exists
        if (!company.dataid || !company.name) continue;

        const dataid = company.dataid;
        const formattedName = formatNameForUrl(company.name);
        
        // Constructing the URL
        const url = `https://finanvo.in/company/profile/${dataid}/${formattedName}`;
        
        console.log(`[${i + 1}/${companies.length}] Fetching: ${url}`);
        
        try {
            // Frontend URL layirundhu HTML data edukrom
            const response = await axios.get(url);
            
            // File name ah dataid.html nu save panrom
            const filePath = path.join(profilesDir, `${dataid}.html`);
            fs.writeFileSync(filePath, response.data);
            
            console.log(`Saved successfully to ${dataid}.html`);
            
            // Server block aagama iruka 2 seconds delay
            await delay(2000);
        } catch (error) {
            console.error(`Failed to fetch ${url} - Error:`, error.response ? error.response.status : error.message);
            await delay(2000);
        }
    }
    console.log("Mulu profile scraping mudinjiduchu!");
}

scrapeProfiles();
