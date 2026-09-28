const pool = require('../config/db');

exports.getB2CData = async (req, res) => {
    const userId = req.user.userId;
    try {
        const conn = await pool.getConnection();

        // 1. Wallet Balance
        const [[user]] = await conn.execute('SELECT wallet_balance, kyc_status, member_id FROM users WHERE id = ?', [userId]);

        // 2. Today's Transactions Count
        const [[todaysTx]] = await conn.execute(
            "SELECT COUNT(*) as count FROM transactions WHERE user_id = ? AND DATE(created_at) = CURDATE()",
            [userId]
        );

        // 3. Monthly Summary (Total amount this month)
        const [[monthlySum]] = await conn.execute(
            "SELECT SUM(total_amount) as total FROM transactions WHERE user_id = ? AND MONTH(created_at) = MONTH(CURDATE()) AND YEAR(created_at) = YEAR(CURDATE())",
            [userId]
        );

        // 4. Total Cashback
        const [[cashback]] = await conn.execute(
            "SELECT SUM(agent_commission) as total FROM transactions WHERE user_id = ?",
            [userId]
        );

        // 5. Recent Transactions
        const [recentTransactions] = await conn.execute(
            "SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC LIMIT 5",
            [userId]
        );

        conn.release();

        res.json({
            walletBalance: user.wallet_balance || 0,
            kycStatus: user.kyc_status || 'NOT_UPLOADED',
            memberId: user.member_id || `CZP${userId}`,
            todaysTransactions: todaysTx.count || 0,
            monthlySummary: monthlySum.total || 0,
            cashbackEarned: cashback.total || 0,
            pendingAlerts: 0,
            recentTransactions: recentTransactions,
        });

    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch dashboard data', error: err.message });
    }
};

exports.getEmployeeData = async (req, res) => {
    if (!['EMPLOYEE', 'ADMIN', 'PARTNER', 'USER'].includes(req.user.role)) {
        return res.status(403).json({ message: 'Access denied.' });
    }

    const employeeId = (req.user.role === 'ADMIN' && req.query.employeeId) ? req.query.employeeId : req.user.userId;

    try {
        const conn = await pool.getConnection();

        const [[employee]] = await conn.execute(
            `SELECT u.wallet_balance, u.kyc_status, u.member_id, k.aadhaar_number as aadhaar, k.pan_number as pan 
       FROM users u LEFT JOIN kyc k ON u.id = k.user_id WHERE u.id = ?`,
            [employeeId]
        );

        const [[todaysTx]] = await conn.execute(
            "SELECT COUNT(*) as count, SUM(total_amount) as amount FROM transactions WHERE user_id = ? AND DATE(created_at) = CURDATE() AND recharge_status = 'SUCCESS'",
            [employeeId]
        );

        const [[monthlyTx]] = await conn.execute(
            "SELECT COUNT(*) as count, SUM(total_amount) as amount FROM transactions WHERE user_id = ? AND MONTH(created_at) = MONTH(CURDATE()) AND recharge_status = 'SUCCESS'",
            [employeeId]
        );

        const [[earnings]] = await conn.execute(
            "SELECT SUM(agent_commission) as total FROM transactions WHERE user_id = ? AND recharge_status = 'SUCCESS'",
            [employeeId]
        );

        conn.release();

        res.json({
            walletBalance: employee.wallet_balance || 0,
            kycStatus: employee.kyc_status || 'NOT_UPLOADED',
            kycDetails: { aadhaar: employee.aadhaar, pan: employee.pan },
            memberId: employee.member_id || `CZP${employeeId}`,
            todayStats: { count: todaysTx.count || 0, amount: todaysTx.amount || 0 },
            monthlyStats: { count: monthlyTx.count || 0, amount: monthlyTx.amount || 0 },
            totalEarnings: earnings.total || 0,
        });

    } catch (err) {
        console.error('Employee dashboard error:', err);
        res.status(500).json({ message: 'Failed to fetch dashboard data', error: err.message });
    }
};
