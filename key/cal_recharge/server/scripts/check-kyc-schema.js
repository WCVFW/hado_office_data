
const mysql = require('mysql2/promise');
require('dotenv').config({ path: '../.env' });

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'recharge_db',
};

async function checkKycSchema() {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log('Connected to database.');

        const [columns] = await connection.query(`DESCRIBE kyc`);
        console.log(JSON.stringify(columns, null, 2));

    } catch (error) {
        console.error('❌ Error checking kyc schema:', error.message);
    } finally {
        if (connection) await connection.end();
    }
}

checkKycSchema();
