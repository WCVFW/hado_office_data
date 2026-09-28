const fs = require('fs');
const xlsx = require('xlsx');

function convertJsonToExcel() {
    const jsonPath = 'finanvo/companies_data.json';
    const excelPath = 'finanvo/companies_data.xlsx';

    if (!fs.existsSync(jsonPath)) {
        console.error(`File ${jsonPath} does not exist yet.`);
        return;
    }

    try {
        const rawData = fs.readFileSync(jsonPath, 'utf8');
        const data = JSON.parse(rawData);

        if (!Array.isArray(data) || data.length === 0) {
            console.log("No data to convert or data is not an array.");
            return;
        }

        console.log(`Converting ${data.length} records to Excel...`);
        
        // Flatten the data if needed, or just let xlsx handle standard objects
        // Usually, xlsx.utils.json_to_sheet handles array of objects well
        const worksheet = xlsx.utils.json_to_sheet(data);
        const workbook = xlsx.utils.book_new();
        
        xlsx.utils.book_append_sheet(workbook, worksheet, "Companies");

        // Write to file
        xlsx.writeFile(workbook, excelPath);
        
        console.log(`Successfully saved ${excelPath}`);
    } catch(err) {
        console.error("Error during conversion:", err);
    }
}

convertJsonToExcel();
