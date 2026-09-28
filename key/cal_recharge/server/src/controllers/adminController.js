const pool = require('../config/db');

exports.getPendingKyc = async (req, res) => {
    if (req.user.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Admin access required' });
    }

    try {
        const conn = await pool.getConnection();
        const [rows] = await conn.execute(`
      SELECT u.id, u.name, u.email, u.phone, u.kyc_status, k.aadhaar_number as aadhaar, k.pan_number as pan, k.address
      FROM users u
      LEFT JOIN kyc k ON u.id = k.user_id
      WHERE u.kyc_status = 'PENDING'
    `);
        conn.release();

        res.json(rows);
    } catch (err) {
        console.error('Get pending KYC error:', err);
        res.status(500).json({ message: 'Failed to fetch pending KYC', error: err.message });
    }
};

exports.approveKyc = async (req, res) => {
    if (req.user.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Admin access required' });
    }

    const { userId, action } = req.body; // action: 'APPROVED' or 'REJECTED'

    if (!userId || !['APPROVED', 'REJECTED'].includes(action)) {
        return res.status(400).json({ message: 'userId and valid action required' });
    }

    try {
        const conn = await pool.getConnection();
        await conn.execute('UPDATE users SET kyc_status = ? WHERE id = ?', [action, userId]);
        await conn.execute('UPDATE kyc SET status = ? WHERE user_id = ?', [action, userId]);
        conn.release();

        res.json({ message: `User KYC ${action.toLowerCase()}ed successfully` });
    } catch (err) {
        console.error('KYC approval error:', err);
        res.status(500).json({ message: 'KYC approval failed', error: err.message });
    }
};

exports.getStats = async (req, res) => {
    if (req.user.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Admin access required' });
    }

    try {
        const conn = await pool.getConnection();

        // 1. Total Employees
        const [[employees]] = await conn.execute("SELECT COUNT(*) as count FROM users WHERE role = 'EMPLOYEE'");

        // 2. Total Revenue (Total amount of all successful transactions)
        // Ensure 'transactions' table exists
        const [[revenue]] = await conn.execute("SELECT SUM(total_amount) as total FROM transactions WHERE status = 'COMPLETED' AND recharge_status = 'SUCCESS'");

        // 3. Pending KYC Count
        const [[pendingKyc]] = await conn.execute("SELECT COUNT(*) as count FROM users WHERE kyc_status = 'PENDING'");

        // 4. Total Commission Distributed
        const [[commission]] = await conn.execute("SELECT SUM(agent_commission) as total FROM transactions WHERE status = 'COMPLETED' AND recharge_status = 'SUCCESS'");

        conn.release();

        res.json({
            totalEmployees: employees.count || 0,
            totalRevenue: revenue ? revenue.total || 0 : 0,
            pendingKycCount: pendingKyc.count || 0,
            totalCommission: commission ? commission.total || 0 : 0
        });
    } catch (err) {
        console.error('Admin stats error:', err);
        res.status(500).json({ message: 'Failed to fetch admin stats', error: err.message });
    }
};

exports.getTransactions = async (req, res) => {
    if (req.user.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Admin access required' });
    }

    try {
        const conn = await pool.getConnection();
        const [rows] = await conn.execute(`
      SELECT t.*, u.name as user_name, u.email as user_email 
      FROM transactions t 
      JOIN users u ON t.user_id = u.id 
      ORDER BY t.created_at DESC 
      LIMIT 50
    `);
        conn.release();

        res.json(rows);
    } catch (err) {
        console.error('Admin transactions error:', err);
        res.status(500).json({ message: 'Failed to fetch transactions', error: err.message });
    }
};

exports.getEmployees = async (req, res) => {
    if (req.user.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Admin access required' });
    }

    try {
        const conn = await pool.getConnection();
        const [rows] = await conn.execute(`
      SELECT id, name, email, phone, role, kyc_status, wallet_balance, created_at 
      FROM users 
      WHERE role = 'EMPLOYEE' 
      ORDER BY created_at DESC
    `);
        conn.release();

        res.json(rows);
    } catch (err) {
        console.error('Admin employees error:', err);
        res.status(500).json({ message: 'Failed to fetch employees', error: err.message });
    }
};

exports.manageWallet = async (req, res) => {
    if (req.user.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Admin access required' });
    }

    const { employeeId, amount, action, description } = req.body; // action: 'CREDIT' or 'DEBIT'
    const adminId = req.user.userId;

    if (!employeeId || !amount || !['CREDIT', 'DEBIT'].includes(action)) {
        return res.status(400).json({ message: 'employeeId, amount, and a valid action (CREDIT/DEBIT) are required.' });
    }

    if (amount <= 0) {
        return res.status(400).json({ message: 'Amount must be positive.' });
    }

    const conn = await pool.getConnection();
    try {
        await conn.beginTransaction();

        // 1. Get the current wallet balance of the employee
        const [[employee]] = await conn.execute('SELECT wallet_balance FROM users WHERE id = ? FOR UPDATE', [employeeId]);

        if (!employee) {
            await conn.rollback();
            conn.release();
            return res.status(404).json({ message: 'Employee not found.' });
        }

        let newBalance = parseFloat(employee.wallet_balance || 0);

        if (action === 'CREDIT') {
            newBalance += parseFloat(amount);
        } else { // DEBIT
            if (newBalance < amount) {
                await conn.rollback();
                conn.release();
                return res.status(400).json({ message: 'Insufficient wallet balance for debit.' });
            }
            newBalance -= parseFloat(amount);
        }

        // 2. Update the user's wallet balance
        await conn.execute('UPDATE users SET wallet_balance = ? WHERE id = ?', [newBalance, employeeId]);

        // 3. Log the transaction in the new wallet_transactions table for auditing
        await conn.execute(
            'INSERT INTO wallet_transactions (user_id, admin_id, amount, type, description) VALUES (?, ?, ?, ?, ?)',
            [employeeId, adminId, amount, action, description || `Wallet ${action.toLowerCase()} by admin`]
        );

        await conn.commit();
        res.json({ message: `Wallet ${action.toLowerCase()}ed successfully. New balance is ${newBalance.toFixed(2)}.` });
    } catch (err) {
        await conn.rollback();
        console.error('Wallet management error:', err);
        res.status(500).json({ message: 'Failed to update wallet', error: err.message });
    } finally {
        conn.release();
    }
};
