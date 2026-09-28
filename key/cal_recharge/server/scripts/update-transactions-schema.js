
const mysql = require('mysql2/promise');
require('dotenv').config({ path: '../.env' });

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'recharge_db',
};

async function updateTransactionsSchema() {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log('Connected to database.');

        // 1. Add commission_status if missing
        try {
            await connection.query(`
        ALTER TABLE transactions 
        ADD COLUMN commission_status ENUM('PENDING', 'CREDITED', 'FAILED') DEFAULT 'PENDING' AFTER operator
      `);
            console.log('✅ commission_status column added.');
        } catch (err) {
            if (err.code === 'ER_DUP_FIELDNAME') {
                console.log('⚠ commission_status column already exists.');
            } else {
                console.error('❌ Error adding commission_status:', err.message);
            }
        }

        // 2. Add recharge_status if missing
        try {
            await connection.query(`
        ALTER TABLE transactions 
        ADD COLUMN recharge_status ENUM('PENDING', 'SUCCESS', 'FAILED') DEFAULT 'PENDING' AFTER commission_status
      `);
            console.log('✅ recharge_status column added.');
        } catch (err) {
            if (err.code === 'ER_DUP_FIELDNAME') {
                console.log('⚠ recharge_status column already exists.');
            } else {
                console.error('❌ Error adding recharge_status:', err.message);
            }
        }

        // 3. Add service_type if missing
        try {
            await connection.query(`
        ALTER TABLE transactions 
        ADD COLUMN service_type VARCHAR(50) AFTER operator
      `);
            console.log('✅ service_type column added.');
        } catch (err) {
            if (err.code === 'ER_DUP_FIELDNAME') {
                console.log('⚠ service_type column already exists.');
            } else {
                console.error('❌ Error adding service_type:', err.message);
            }
        }

    } catch (error) {
        console.error('❌ Database connection error:', error.message);
    } finally {
        if (connection) await connection.end();
    }
}

updateTransactionsSchema();
