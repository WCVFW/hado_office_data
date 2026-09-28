const pool = require('../config/db');

exports.getBalance = async (req, res) => {
    const userId = req.user.userId;
    try {
        const conn = await pool.getConnection();
        const [[user]] = await conn.execute(
            'SELECT wallet_balance, kyc_status FROM users WHERE id = ?',
            [userId]
        );
        conn.release();

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            balance: user.wallet_balance || 0,
            kyc_status: user.kyc_status,
        });
    } catch (err) {
        console.error('Get wallet balance error:', err);
        res.status(500).json({ message: 'Failed to fetch wallet balance', error: err.message });
    }
};

exports.withdrawCommission = async (req, res) => {
    if (!['EMPLOYEE', 'ADMIN'].includes(req.user.role)) {
        return res.status(403).json({ message: 'Access denied. Employee or Admin role required.' });
    }
    const userId = req.user.userId;
    const conn = await pool.getConnection();

    try {
        await conn.beginTransaction();

        // 1. Calculate the total withdrawable commission amount for the user.
        const [commissionRows] = await conn.execute(
            `SELECT id, agent_commission FROM transactions WHERE user_id = ? AND commission_status = 'PENDING' AND agent_commission > 0 FOR UPDATE`,
            [userId]
        );

        if (commissionRows.length === 0) {
            await conn.rollback();
            conn.release();
            return res.status(400).json({ message: 'No pending commissions to withdraw.' });
        }

        const totalCommissionToWithdraw = commissionRows.reduce((sum, row) => sum + parseFloat(row.agent_commission), 0);

        if (totalCommissionToWithdraw <= 0) {
            await conn.rollback();
            conn.release();
            return res.status(400).json({ message: 'No pending commissions to withdraw.' });
        }

        // 2. Update the user's main wallet balance
        await conn.execute(
            'UPDATE users SET wallet_balance = wallet_balance + ? WHERE id = ?',
            [totalCommissionToWithdraw, userId]
        );

        // 3. Mark the commissions as paid out
        const transactionIdsToUpdate = commissionRows.map(row => row.id);
        await conn.execute(
            `UPDATE transactions SET commission_status = 'PAID_OUT' WHERE id IN (?)`,
            [transactionIdsToUpdate]
        );

        // 4. Log this action in the wallet_transactions table
        await conn.execute(
            'INSERT INTO wallet_transactions (user_id, amount, type, description) VALUES (?, ?, ?, ?)',
            [userId, totalCommissionToWithdraw, 'CREDIT', 'Commission earnings withdrawn to wallet']
        );

        await conn.commit();

        res.json({
            message: `Successfully withdrew ₹${totalCommissionToWithdraw.toFixed(2)} to your main wallet.`,
        });

    } catch (err) {
        await conn.rollback();
        console.error('Commission withdrawal error:', err);
        res.status(500).json({ message: 'Failed to withdraw commission', error: err.message });
    } finally {
        conn.release();
    }
};

exports.getHistory = async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const userId = req.user.userId;

    try {
        const conn = await pool.getConnection();

        const [countRows] = await conn.execute(
            'SELECT COUNT(*) as total FROM wallet_transactions WHERE user_id = ?',
            [userId]
        );

        const totalTransactions = countRows[0] ? countRows[0].total : 0;
        const totalPages = Math.ceil(totalTransactions / limit);

        const [transactions] = await conn.query(
            `SELECT id, amount, type, description, created_at FROM wallet_transactions WHERE user_id = ? ORDER BY created_at DESC LIMIT ? OFFSET ?`,
            [userId, Number(limit), Number(offset)]
        );

        conn.release();

        res.json({
            transactions,
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                totalTransactions: totalTransactions,
            },
        });

    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch wallet history', error: err.message });
    }
};
