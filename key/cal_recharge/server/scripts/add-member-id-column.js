
const mysql = require('mysql2/promise');
require('dotenv').config({ path: '../.env' });

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'recharge_db',
};

async function addMemberIdColumn() {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log('Connected to database.');

        const alterQuery = `
      ALTER TABLE users 
      ADD COLUMN member_id VARCHAR(20) UNIQUE DEFAULT NULL AFTER id
    `;

        try {
            await connection.query(alterQuery);
            console.log('✅ member_id column added to users table.');

            // Optionally, populate member_id for existing users
            const [users] = await connection.query('SELECT id FROM users WHERE member_id IS NULL');
            if (users.length > 0) {
                console.log(`Updating member_id for ${users.length} existing users...`);
                for (const user of users) {
                    const memberId = `CZP${String(user.id).padStart(5, '0')}`;
                    await connection.query('UPDATE users SET member_id = ? WHERE id = ?', [memberId, user.id]);
                }
                console.log('✅ Existing users updated with member_ids.');
            }

        } catch (err) {
            if (err.code === 'ER_DUP_FIELDNAME') {
                console.log('⚠ member_id column already exists.');
            } else {
                throw err;
            }
        }

    } catch (error) {
        console.error('❌ Error updating users table:', error.message);
    } finally {
        if (connection) await connection.end();
    }
}

addMemberIdColumn();
