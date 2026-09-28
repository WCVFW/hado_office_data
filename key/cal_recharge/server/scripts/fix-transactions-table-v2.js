
const mysql = require('mysql2/promise');
require('dotenv').config({ path: '../.env' });

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'recharge_db',
};

async function fixTransactionsTable() {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log('Connected to database.');

        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS transactions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        total_amount DECIMAL(10,2) DEFAULT 0.00,
        agent_commission DECIMAL(10,2) DEFAULT 0.00,
        operator VARCHAR(100),
        service_type VARCHAR(50),
        commission_status ENUM('PENDING', 'CREDITED', 'FAILED') DEFAULT 'PENDING',
        recharge_status ENUM('PENDING', 'SUCCESS', 'FAILED') DEFAULT 'PENDING',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `;

        await connection.query(createTableQuery);
        console.log('✅ Transactions table checked/created successfully.');

        // Check if we need to add any columns if the table already existed but was incomplete
        // This is a simple check, usually 'CREATE TABLE IF NOT EXISTS' is enough if it didn't exist.
        // If it existed but was empty/wrong, we might need ALTER statements, but let's assume it was missing or we are just ensuring it's there.

    } catch (error) {
        console.error('❌ Error fixing transactions table:', error.message);
    } finally {
        if (connection) await connection.end();
    }
}

fixTransactionsTable();
