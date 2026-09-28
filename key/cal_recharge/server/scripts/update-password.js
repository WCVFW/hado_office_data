const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'recharge_db',
});

async function updatePassword() {
    const userId = 8;
    const newPassword = 'Prakash@1482';

    try {
        const conn = await pool.getConnection();

        // Check if user exists
        const [rows] = await conn.execute('SELECT id, email FROM users WHERE id = ?', [userId]);
        if (rows.length === 0) {
            console.log(`❌ User with ID ${userId} not found.`);
            conn.release();
            process.exit(1);
        }

        const user = rows[0];
        console.log(`👤 Found user: ${user.email} (ID: ${user.id})`);

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password
        await conn.execute('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, userId]);

        console.log(`✅ Password updated successfully for user ID ${userId}`);

        conn.release();
        process.exit(0);
    } catch (err) {
        console.error('❌ Error updating password:', err.message);
        process.exit(1);
    }
}

updatePassword();
