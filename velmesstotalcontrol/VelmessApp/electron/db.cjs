const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: '13.50.247.143',
    user: 'velmess_remote',
    password: process.env.DB_PASSWORD || 'VelMess@2024',
    database: process.env.DB_NAME || 'velmess_total_control',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const db = {
    async getUserByUsername(username) {
        const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
        return rows[0];
    },

    // --- USER MANAGEMENT ---
    async getAllUsers() {
        // Fetch users with their assigned shop name
        const [rows] = await pool.execute(`
            SELECT u.id, u.username, u.role, u.shop_id, u.created_at, s.name as shop_name 
            FROM users u 
            LEFT JOIN shops s ON u.shop_id = s.id
            ORDER BY u.created_at DESC
        `);
        return rows;
    },

    async createShopAndUser(shopName, address, phone, category, password) {
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            // Generate username (remove spaces)
            const username = shopName.replace(/[^a-zA-Z0-9]/g, '') + "_Owner"; // Safer regex

            // Insert Shop (Use contact_number)
            const [shopResult] = await connection.execute(
                'INSERT INTO shops (name, location, contact_number, is_active) VALUES (?, ?, ?, 1)',
                [shopName, address, phone]
            );
            const shopId = shopResult.insertId;

            // Insert User
            await connection.execute(
                'INSERT INTO users (username, password_hash, role, shop_id) VALUES (?, ?, "shop_owner", ?)',
                [username, password, shopId]
            );

            await connection.commit();
            return { success: true, shopId, username };
        } catch (error) {
            await connection.rollback();
            console.error("Transaction Error:", error);
            throw error;
        } finally {
            connection.release();
        }
    },

    async createUser(username, password, role, shopId = null) {
        // In production, password should be hashed!
        const [result] = await pool.execute(
            'INSERT INTO users (username, password_hash, role, shop_id) VALUES (?, ?, ?, ?)',
            [username, password, role, shopId || null] // Handle 'null' string or empty
        );
        return result.insertId;
    },

    async updateUser(id, username, password, role, shopId = null) {
        let query = 'UPDATE users SET username = ?, role = ?, shop_id = ?';
        let params = [username, role, shopId || null];

        if (password && password.trim() !== '') {
            query += ', password_hash = ?';
            params.push(password);
        }

        query += ' WHERE id = ?';
        params.push(id);

        const [result] = await pool.execute(query, params);
        return result.affectedRows > 0;
    },

    async deleteUser(userId) {
        const [result] = await pool.execute('DELETE FROM users WHERE id = ?', [userId]);
        return result.affectedRows > 0;
    },

    // --- DASHBOARD STATS ---
    async getDashboardStats() {
        const [sales] = await pool.execute('SELECT SUM(total_amount) as totalRevenue, COUNT(*) as totalOrders FROM orders WHERE DATE(created_at) = CURDATE()');
        const [prevSales] = await pool.execute('SELECT SUM(total_amount) as totalRevenue FROM orders WHERE DATE(created_at) = DATE_SUB(CURDATE(), INTERVAL 1 DAY)');
        const [users] = await pool.execute('SELECT COUNT(*) as activeUsers FROM users WHERE role = "shop_owner"');
        const [products] = await pool.execute('SELECT COUNT(*) as prodCount FROM products');

        const rev = sales[0].totalRevenue || 0;
        const prevRev = prevSales[0].totalRevenue || 0;
        const trend = prevRev === 0 ? 100 : Math.round(((rev - prevRev) / prevRev) * 100);

        return {
            revenue: rev,
            orders: sales[0].totalOrders || 0,
            activeUsers: users[0].activeUsers || 0,
            totalProducts: products[0].prodCount || 0,
            revenueTrend: trend > 0 ? `+${trend}%` : `${trend}%`
        };
    },

    async getCompletedTodayCount() {
        const [rows] = await pool.execute('SELECT COUNT(*) as count FROM stock_requests WHERE status = "completed" AND DATE(created_at) = CURDATE()');
        return rows[0].count || 0;
    },

    async getNextOrderId() {
        const [rows] = await pool.execute("SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'orders'");
        return rows[0].AUTO_INCREMENT || 1;
    },

    // --- ANALYTICS ---
    async getSalesAnalytics() {
        // Last 7 Days Revenue
        const [dailyRevenue] = await pool.execute(`
        SELECT DATE_FORMAT(d, '%a') as name, SUM(total_amount) as revenue, COUNT(*) as orders
        FROM (
            SELECT DATE(created_at) as d, total_amount 
            FROM orders 
            WHERE created_at >= NOW() - INTERVAL 7 DAY
        ) as sub
        GROUP BY d
        ORDER BY d ASC
      `);

        // Category Sales
        const [categorySales] = await pool.execute(`
        SELECT p.category as name, SUM(oi.quantity * oi.price_at_sale) as value
        FROM order_items oi
        JOIN products p ON oi.product_id = p.id
        GROUP BY p.category
      `);

        return { dailyRevenue, categorySales };
    },

    // --- SHOPS ---
    async getAllShops() {
        const [rows] = await pool.execute(`
        SELECT s.*, 
        COALESCE(SUM(o.total_amount), 0) as today_revenue
        FROM shops s
        LEFT JOIN orders o ON s.id = o.shop_id AND DATE(o.created_at) = CURDATE()
        GROUP BY s.id
      `);
        return rows;
    },

    async updateShopStatus(shopId, isActive) {
        await pool.execute('UPDATE shops SET is_active = ? WHERE id = ?', [isActive ? 1 : 0, shopId]);
        return true;
    },

    async deleteShop(shopId) {
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            // Delete associated inventory
            await connection.execute('DELETE FROM inventory WHERE shop_id = ?', [shopId]);
            // Delete shop
            await connection.execute('DELETE FROM shops WHERE id = ?', [shopId]);
            await connection.commit();
            return true;
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    },
    async getAllProducts() {
        const [rows] = await pool.execute('SELECT * FROM products ORDER BY category, name');
        return rows;
    },

    async createProduct(name, category, price, unit) {
        const [result] = await pool.execute(
            'INSERT INTO products (name, category, base_price, unit) VALUES (?, ?, ?, ?)',
            [name, category, price, unit]
        );
        return { success: true, id: result.insertId };
    },

    // --- INVENTORY ---
    async getShopInventory(shopId) {
        if (!shopId) return [];
        const [rows] = await pool.execute(`
      SELECT p.id, p.name, p.category, p.unit, p.base_price, i.quantity, i.min_threshold 
      FROM inventory i
      JOIN products p ON i.product_id = p.id
      WHERE i.shop_id = ?
    `, [shopId]);
        return rows;
    },

    async getAllInventoryGlobal() {
        const [rows] = await pool.execute(`
        SELECT p.name, p.category, SUM(i.quantity) as total_stock, p.unit, p.base_price,
        (SUM(i.quantity) < SUM(i.min_threshold)) as is_low
        FROM inventory i
        JOIN products p ON i.product_id = p.id
        GROUP BY p.id
      `);
        return rows;
    },

    // --- ORDERS / KDS ---
    async getRecentOrders(shopId = null) {
        // Build Where Clause
        let query = `
        SELECT o.id, s.name as shop_name, o.created_at, o.total_amount, o.status,
        GROUP_CONCAT(CONCAT(p.name, ' x', oi.quantity) SEPARATOR ', ') as items
        FROM orders o
        JOIN shops s ON o.shop_id = s.id
        JOIN order_items oi ON o.id = oi.order_id
        JOIN products p ON oi.product_id = p.id
        WHERE o.status != 'completed' AND o.created_at >= NOW() - INTERVAL 24 HOUR
      `;

        const params = [];
        if (shopId) {
            query += ' AND o.shop_id = ?';
            params.push(shopId);
        }

        query += `
        GROUP BY o.id
        ORDER BY o.created_at DESC
        LIMIT 50
      `;

        const [rows] = await pool.execute(query, params);
        return rows;
    },

    async updateOrderStatus(orderId, status) {
        const [result] = await pool.execute(
            'UPDATE orders SET status = ? WHERE id = ?',
            [status, orderId]
        );
        return result.affectedRows > 0;
    },

    async getLowStockAlerts() {
        const [rows] = await pool.execute(`
      SELECT s.name as shop_name, p.name as product_name, i.quantity, i.min_threshold
      FROM inventory i
      JOIN shops s ON i.shop_id = s.id
      JOIN products p ON i.product_id = p.id
      WHERE i.quantity <= i.min_threshold
    `);
        return rows;
    },

    // --- OVERVIEW ---
    async getOverviewData() {
        // 1. Total Products
        const [prodRows] = await pool.execute('SELECT COUNT(*) as count FROM products');

        // 2. Total Stock & Stock Value
        const [stockRows] = await pool.execute('SELECT SUM(quantity) as totalQty FROM inventory');

        // 3. Top Stores by Sales (All Time or Month)
        const [topStores] = await pool.execute(`
            SELECT s.name, COALESCE(SUM(o.total_amount), 0) as sales
            FROM shops s
            LEFT JOIN orders o ON s.id = o.shop_id
            GROUP BY s.id
            ORDER BY sales DESC
            LIMIT 5
        `);

        // 4. Profit vs Expense (Last 6 Months)
        // Revenue = SUM(price_at_sale * quantity)
        // Expense = SUM(base_price * quantity)
        // Profit = Revenue - Expense
        const [profitExpense] = await pool.execute(`
            SELECT 
                DATE_FORMAT(o.created_at, '%b') as name,
                SUM(oi.quantity * p.base_price) as expense,
                SUM(oi.quantity * (oi.price_at_sale - p.base_price)) as profit
            FROM orders o
            JOIN order_items oi ON o.id = oi.order_id
            JOIN products p ON oi.product_id = p.id
            WHERE o.created_at >= NOW() - INTERVAL 6 MONTH
            GROUP BY DATE_FORMAT(o.created_at, '%Y-%m'), DATE_FORMAT(o.created_at, '%b')
            ORDER BY DATE_FORMAT(o.created_at, '%Y-%m') ASC
        `);

        return {
            totalProducts: prodRows[0].count || 0,
            totalStock: stockRows[0].totalQty || 0,
            topStores: topStores.map(s => ({ name: s.name, sales: Number(s.sales) })),
            profitVsExpense: profitExpense.map(r => ({
                name: r.name,
                expense: Number(r.expense),
                profit: Number(r.profit)
            }))
        };
    },

    async createOrder(shopId, userId, items) {
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            let totalAmount = 0;
            for (const item of items) { totalAmount += item.price * item.quantity; }

            const [orderResult] = await connection.execute(
                'INSERT INTO orders (shop_id, user_id, total_amount, status) VALUES (?, ?, ?, "pending")',
                [shopId, userId, totalAmount]
            );
            const orderId = orderResult.insertId;

            // Safe bet: INSERT INTO shops (name, location, contact_number, is_active)
            // This snippet was provided in the instructions, but it's unclear if it's meant to replace or be added.
            // Assuming it's a comment/example for a potential future `createShop` function,
            // or a placeholder for a different context.
            // If it were to be added here, `shopName`, `address`, `phone` would be undefined.
            // The instruction was to change 'contact_info' to 'contact_number' in the INSERT shops query.
            // Since no `INSERT shops` query exists in the original `createOrder` function,
            // and the provided snippet already uses `contact_number`, no change is needed for this specific instruction.
            // If the intent was to *add* a `createShop` function or similar, that would be a different instruction.

            for (const item of items) {
                await connection.execute(
                    'INSERT INTO order_items (order_id, product_id, quantity, price_at_sale) VALUES (?, ?, ?, ?)',
                    [orderId, item.id, item.quantity, item.price]
                );
                await connection.execute(
                    'UPDATE inventory SET quantity = quantity - ? WHERE shop_id = ? AND product_id = ?',
                    [item.quantity, shopId, item.id]
                );
            }
            await connection.commit();
            return { success: true, orderId };
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    },

    // --- CENTRALIZED KITCHEN / STOCK REQUESTS ---
    async requestStock(shopId, items) {
        // items: [{ productId, quantity }]
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            // Create table if not exists (Lazy Init for demo)
            await connection.execute(`
                CREATE TABLE IF NOT EXISTS stock_requests (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    shop_id INT,
                    product_id INT,
                    quantity INT,
                    status VARCHAR(20) DEFAULT 'pending',
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `);

            for (const item of items) {
                await connection.execute(
                    'INSERT INTO stock_requests (shop_id, product_id, quantity) VALUES (?, ?, ?)',
                    [shopId, item.productId, item.quantity]
                );
            }
            await connection.commit();
            return true;
        } catch (error) {
            await connection.rollback();
            console.error(error);
            return false;
        } finally {
            connection.release();
        }
    },

    async getOpenStockRequests() {
        // Fallback if table doesn't exist yet
        try {
            const [rows] = await pool.execute(`
                SELECT r.id, r.shop_id, s.name as shop_name, r.product_id, p.name as product_name, r.quantity, r.status, r.created_at
                FROM stock_requests r
                JOIN shops s ON r.shop_id = s.id
                JOIN products p ON r.product_id = p.id
                WHERE r.status = 'pending'
                ORDER BY r.created_at ASC
            `);
            return rows;
        } catch (e) {
            return [];
        }
    },

    async fulfillStockRequest(requestId) {
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();

            // 1. Get Request Details
            const [rows] = await connection.execute('SELECT * FROM stock_requests WHERE id = ?', [requestId]);
            if (rows.length === 0) throw new Error("Request not found");
            const req = rows[0];

            // 2. Update Shop Inventory (Add Stock)
            const [invRows] = await connection.execute(
                'SELECT * FROM inventory WHERE shop_id = ? AND product_id = ?',
                [req.shop_id, req.product_id]
            );

            if (invRows.length > 0) {
                await connection.execute(
                    'UPDATE inventory SET quantity = quantity + ? WHERE shop_id = ? AND product_id = ?',
                    [req.quantity, req.shop_id, req.product_id]
                );
            } else {
                await connection.execute(
                    'INSERT INTO inventory (shop_id, product_id, quantity, min_threshold) VALUES (?, ?, ?, 10)',
                    [req.shop_id, req.product_id, req.quantity]
                );
            }

            // 3. Mark Request Complete
            await connection.execute('UPDATE stock_requests SET status = "completed" WHERE id = ?', [requestId]);

            await connection.commit();
            return true;
        } catch (error) {
            await connection.rollback();
            console.error(error);
            return false;
        } finally {
            connection.release();
        }
    },

    async updateShopStock(shopId, productId, quantity, totalAdd = false, threshold = null) {
        const connection = await pool.getConnection();
        try {
            await connection.beginTransaction();
            const [rows] = await connection.execute(
                'SELECT * FROM inventory WHERE shop_id = ? AND product_id = ?',
                [shopId, productId]
            );

            if (rows.length > 0) {
                if (totalAdd) {
                    await connection.execute(
                        'UPDATE inventory SET quantity = quantity + ?' + (threshold ? ', min_threshold = ?' : '') + ' WHERE shop_id = ? AND product_id = ?',
                        threshold ? [quantity, threshold, shopId, productId] : [quantity, shopId, productId]
                    );
                } else {
                    // If totalAdd is false, but quantity is 0, we might just be updating threshold
                    const setClause = [];
                    const params = [];
                    if (quantity !== 0 || !threshold) { setClause.push('quantity = ?'); params.push(quantity); }
                    if (threshold) { setClause.push('min_threshold = ?'); params.push(threshold); }

                    await connection.execute(
                        `UPDATE inventory SET ${setClause.join(', ')} WHERE shop_id = ? AND product_id = ?`,
                        [...params, shopId, productId]
                    );
                }
            } else {
                await connection.execute(
                    'INSERT INTO inventory (shop_id, product_id, quantity, min_threshold) VALUES (?, ?, ?, ?)',
                    [shopId, productId, quantity, threshold || 10]
                );
            }

            await connection.commit();
            return true;
        } catch (error) {
            await connection.rollback();
            console.error(error);
            return false;
        } finally {
            connection.release();
        }
    }
};

module.exports = db;
