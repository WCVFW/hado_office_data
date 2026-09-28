const https = require('https');

// ==========================================
// ⚠️ IMPORTANT: ADD YOUR TOKENS HERE ⚠️
// Go to finanvo.in -> Inspect (F12) -> Application -> Local Storage
// Copy the values for 'token' and 'visitorId' and paste them below:
// ==========================================
const AUTH_TOKEN = ''; // e.g. 'Bearer eyJhb...'
const VISITOR_ID = ''; // e.g. '12345abcde'

const BASE_URL = 'https://api5.finanvo.in';

function fetchAPI(endpoint) {
    return new Promise((resolve, reject) => {
        const url = `${BASE_URL}${endpoint}`;
        https.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'app-origin': 'https://finanvo.in',
                'Authorization': AUTH_TOKEN,
                'VisitorID': VISITOR_ID,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if(res.statusCode !== 200) {
                    console.log(`[Error ${res.statusCode}] for endpoint ${endpoint}`);
                }
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    resolve({ error: data, statusCode: res.statusCode });
                }
            });
        }).on('error', err => reject(err));
    });
}

async function fetchTotalCompanyData(searchQuery) {
    console.log(`\n🔍 Searching for: "${searchQuery}"...`);
    
    if(!AUTH_TOKEN) {
        console.log('⚠️ WARNING: You have not provided an AUTH_TOKEN. The API may reject the request.');
    }

    const searchRes = await fetchAPI(`/search/company?query=${encodeURIComponent(searchQuery)}`);
    
    if (!searchRes.data || searchRes.data.length === 0) {
        console.log('❌ No company found. This is likely because the API blocked the request due to missing/invalid Authorization token.');
        console.log('Please login to finanvo.in, get your token from Local Storage, and paste it into this script.');
        return;
    }
    
    const company = searchRes.data[0]; 
    const CIN = company.identifier_value;
    console.log(`✅ Found Company: ${company.name}`);
    console.log(`📍 CIN: ${CIN}\n`);
    
    console.log(`📥 Fetching Total Data for ${company.name}...\n`);
    
    try {
        const [profile, financials, directors, charges] = await Promise.all([
            fetchAPI(`/company/profile?CIN=${CIN}`),
            fetchAPI(`/company/financials?CIN=${CIN}&type=1`),
            fetchAPI(`/company/directors?CIN=${CIN}`),
            fetchAPI(`/company/charges?CIN=${CIN}`)
        ]);

        console.log('================ COMPANY PROFILE ================');
        console.log(`- Status: ${profile.data?.COMPANY_STATUS || 'N/A'}`);
        console.log(`- Incorporation Date: ${profile.data?.DATE_OF_INCORPORATION || 'N/A'}`);
        console.log(`- Paid Up Capital: ₹${profile.data?.PAID_UP_CAPITAL || 0}`);
        console.log(`- Registered Office: ${profile.data?.REGISTERED_OFFICE_ADDRESS || 'N/A'}`);

        console.log('\n================ DIRECTORS ================');
        if (directors.data && directors.data.length > 0) {
            directors.data.forEach(d => {
                console.log(`- ${d.NAME} (DIN: ${d.DIN})`);
            });
        } else {
            console.log('- No director data available.');
        }

        console.log('\n================ CHARGES (LOANS) ================');
        if (charges.data) {
            console.log(`- Total Open Charges: ${charges.data.length}`);
        } else {
            console.log('- No charges found.');
        }
        
        console.log('\n✅ Data fetched successfully.');

    } catch (error) {
        console.error('❌ Error fetching data:', error.message);
    }
}

const query = process.argv[2] || 'Tata Motors';
fetchTotalCompanyData(query);
