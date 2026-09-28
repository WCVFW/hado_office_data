const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'recharge_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// --- DATABASE HEARTBEAT ---
setInterval(async () => {
    try {
        const conn = await pool.getConnection();
        await conn.query('SELECT 1');
        conn.release();
        // console.log('[DB Heartbeat] Connection kept alive.');
    } catch (err) {
        console.error('[DB Heartbeat] Error keeping connection alive:', err.message);
    }
}, 10 * 60 * 1000); // Every 10 minutes

module.exports = pool;
