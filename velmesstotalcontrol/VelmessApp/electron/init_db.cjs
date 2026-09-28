const mysql = require('mysql2/promise');

async function initDB() {
    console.log("Initializing Database...");

    // Config hardcoded for portability as requested, or use env vars
    // In a real app, do not commit secrets.
    const config = {
        host: '13.50.247.143',
        user: 'velmess_remote',
        password: process.env.DB_PASSWORD || 'VelMess@2024',
        database: process.env.DB_NAME || 'velmess_total_control',
        connectTimeout: 5000,
        waitForConnections: true,
        connectionLimit: 10
    };

    let connection;
    try {
        connection = await mysql.createConnection(config);
        console.log("Connected to database.");

        const queries = [
            `CREATE TABLE IF NOT EXISTS shops (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                location VARCHAR(255),
                contact_number VARCHAR(20),
                is_active BOOLEAN DEFAULT 1,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                role ENUM('admin', 'shop_owner', 'staff') NOT NULL,
                shop_id INT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (shop_id) REFERENCES shops(id) ON DELETE SET NULL
            )`,
            `CREATE TABLE IF NOT EXISTS products (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                category VARCHAR(100),
                base_price DECIMAL(10,2) NOT NULL, -- Price to sell
                unit VARCHAR(20) DEFAULT 'unit',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS inventory (
                id INT AUTO_INCREMENT PRIMARY KEY,
                shop_id INT NOT NULL,
                product_id INT NOT NULL,
                quantity INT DEFAULT 0,
                min_threshold INT DEFAULT 10,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (shop_id) REFERENCES shops(id) ON DELETE CASCADE,
                FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
                UNIQUE KEY unique_stock (shop_id, product_id)
            )`,
            `CREATE TABLE IF NOT EXISTS orders (
                id INT AUTO_INCREMENT PRIMARY KEY,
                shop_id INT NOT NULL,
                user_id INT,
                total_amount DECIMAL(10,2) NOT NULL,
                status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (shop_id) REFERENCES shops(id),
                FOREIGN KEY (user_id) REFERENCES users(id)
            )`,
            `CREATE TABLE IF NOT EXISTS order_items (
                id INT AUTO_INCREMENT PRIMARY KEY,
                order_id INT NOT NULL,
                product_id INT NOT NULL,
                quantity INT NOT NULL,
                price_at_sale DECIMAL(10,2) NOT NULL,
                FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
                FOREIGN KEY (product_id) REFERENCES products(id)
            )`,
            `CREATE TABLE IF NOT EXISTS stock_requests (
                id INT AUTO_INCREMENT PRIMARY KEY,
                shop_id INT,
                product_id INT,
                quantity INT,
                status VARCHAR(20) DEFAULT 'pending',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`,
            // Insert Default Admin if not exists
            `INSERT IGNORE INTO users (username, password_hash, role) VALUES ('admin', 'admin_pass', 'admin')`
        ];

        for (const query of queries) {
            await connection.execute(query);
        }

        console.log("Database initialized successfully with Admin user.");
    } catch (err) {
        console.error("Database Initialization Failed:", err);
    } finally {
        if (connection) await connection.end();
    }
}

module.exports = initDB;
