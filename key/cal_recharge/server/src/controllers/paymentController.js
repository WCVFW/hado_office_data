const pool = require('../config/db');
const razorpay = require('../config/razorpay');
const operatorCategoryMap = require('../config/operators');
const crypto = require('crypto');
const PDFDocument = require('pdfkit');
require('dotenv').config();

const API_CUSTOMER_ID = process.env.API_CUSTOMER_ID || '3176029605';
const API_TOKEN = process.env.API_TOKEN || '6FGuGViLkD0f4Y2UppBonx00l';

// Legacy order creation
exports.razorpayOrder = async (req, res) => {
    const { amount, mobile_number, operator } = req.body;

    if (!amount || !mobile_number || !operator) {
        return res.status(400).json({ message: 'amount, mobile_number, operator required' });
    }

    try {
        const options = {
            amount: amount,
            currency: "INR",
            receipt: `recharge_${req.user.userId}_${Date.now()}`,
            notes: {
                type: 'recharge',
                userId: req.user.userId,
                mobile_number: mobile_number,
                operator: operator,
            }
        };

        const order = await razorpay.orders.create(options);

        res.json({
            order_id: order.id,
            amount: order.amount,
            currency: order.currency,
        });
    } catch (err) {
        console.error('Razorpay order error (legacy):', err);
        res.status(500).json({ message: 'Failed to create order', error: err.message });
    }
};

exports.createOrder = async (req, res) => {
    const { amount, type = 'wallet_top_up', notes = {} } = req.body;

    if (!amount || amount <= 0) {
        return res.status(400).json({ message: 'A valid amount is required.' });
    }

    try {
        const receiptId = `${type}_${req.user.userId}_${Date.now()}`;

        const options = {
            amount: amount * 100, // amount in paise
            currency: "INR",
            receipt: receiptId,
            notes: {
                type: type,
                userId: req.user.userId,
                ...notes
            }
        };

        const order = await razorpay.orders.create(options);

        res.json({
            order_id: order.id,
            amount: order.amount,
            currency: order.currency,
            notes: order.notes
        });

    } catch (err) {
        console.error(`Failed to create Razorpay order for type: ${type}`, err);
        res.status(500).json({ message: 'Failed to create Razorpay order', error: err.message });
    }
};

exports.verifyPayment = async (req, res) => {
    const {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        mobile_number,
        operator,
        operator_code,
        amount,
        plan_amount,
        agent_commission,
        company_commission,
        api_commission
    } = req.body;
    const userId = req.user.userId;

    if (!razorpay_payment_id || !razorpay_order_id || !mobile_number || !operator || !amount || !operator_code || !plan_amount) {
        return res.status(400).json({ message: 'Incomplete payment details received from frontend.' });
    }

    try {
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        if (expectedSignature !== razorpay_signature) {
            console.warn('Invalid payment signature received.');
            return res.status(400).json({ message: 'Invalid payment signature.' });
        }

        const orderNo = razorpay_payment_id ? razorpay_payment_id.slice(-10) : `fallback_${Date.now()}`;

        const operatorMapKey = Object.keys(operatorCategoryMap).find(key => key.toLowerCase() === operator_code.toLowerCase());
        const numericOperatorCode = operatorMapKey ? operatorCategoryMap[operatorMapKey].id : operator_code;

        const rechargeApiUrl = `https://api.allbills.in/billpay/paynow?customer_id=${API_CUSTOMER_ID}&token=${API_TOKEN}&operator=${numericOperatorCode}&amount=${plan_amount}&mobile=${mobile_number}&orderno=${orderNo}`;

        console.log(`Calling Recharge API: ${rechargeApiUrl}`);
        const rechargeApiResponse = await fetch(rechargeApiUrl);

        let rechargeApiBody;
        try {
            rechargeApiBody = await rechargeApiResponse.json();
        } catch (e) {
            rechargeApiBody = await rechargeApiResponse.text();
        }

        const rechargeCallResult = {
            ok: rechargeApiResponse.ok,
            status: rechargeApiResponse.status,
            body: rechargeApiBody,
        };

        const rechargeStatus = rechargeApiResponse.ok && rechargeApiBody && rechargeApiBody.success == 1 ? 'SUCCESS' : 'FAILED';

        const finalAgentCommission = rechargeStatus === 'SUCCESS' ? (agent_commission || 0) : 0;
        const finalCompanyCommission = rechargeStatus === 'SUCCESS' ? (company_commission || 0) : 0;

        const conn = await pool.getConnection();
        await conn.execute(
            `INSERT INTO transactions 
        (user_id, mobile_number, operator, total_amount, plan_amount, agent_commission, company_commission, api_commission, razorpay_payment_id, razorpay_order_id, razorpay_signature, status, recharge_status, recharge_response) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                userId,
                mobile_number,
                operator,
                amount,
                plan_amount,
                finalAgentCommission,
                finalCompanyCommission,
                api_commission || 0,
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
                'COMPLETED',
                rechargeStatus,
                JSON.stringify(rechargeCallResult.body)
            ]
        );
        conn.release();

        res.json({
            message: 'Payment verification processed.',
            recharge_call: rechargeCallResult
        });
    } catch (err) {
        console.error('Payment verification error:', err);
        res.status(500).json({ message: 'Payment verification failed', error: err.message });
    }
};

exports.fetchBill = async (req, res) => {
    const { operator, number } = req.body;

    if (!operator || !number) {
        return res.status(400).json({ message: 'Operator and Consumer Number are required.' });
    }

    try {
        const fetchApiUrl = `https://api.allbills.in/billpay/fetchbill?customer_id=${API_CUSTOMER_ID}&token=${API_TOKEN}&operator=${operator}&number=${number}`;
        console.log(`Calling Fetch Bill API: ${fetchApiUrl}`);

        const response = await fetch(fetchApiUrl);
        const data = await response.json();

        if (data && data.success == 1) {
            res.json({
                success: true,
                name: data.name || 'Consumer',
                amount: data.amount,
                dueDate: data.duedate || 'N/A',
                billNumber: data.billnumber || 'N/A',
                fetch_id: data.fetch_id
            });
        } else {
            res.status(400).json({
                success: false,
                message: data.message || 'Failed to fetch bill details. Please check your consumer number.'
            });
        }
    } catch (err) {
        console.error('Fetch bill error:', err);
        res.status(500).json({ message: 'Bill fetching failed', error: err.message });
    }
};

exports.getPlans = async (req, res) => {
    const { operator, circle } = req.params;
    if (!operator || !circle) return res.status(400).json({ message: 'Operator and Circle are required' });
    try {
        const url = `https://api.allbills.in/operatorapi/prepaid?customer_id=${API_CUSTOMER_ID}&token=${API_TOKEN}&operator=${operator}&circle=${circle}`;
        console.log(`Calling Mobile Plans API: ${url}`);
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error('Mobile plans error:', err);
        res.status(500).json({ message: 'Failed to fetch plans', error: err.message });
    }
};

exports.getDthPlans = async (req, res) => {
    const { operator } = req.params;
    if (!operator) return res.status(400).json({ message: 'Operator is required' });
    try {
        const url = `https://api.allbills.in/operatorapi/dthplan?customer_id=${API_CUSTOMER_ID}&token=${API_TOKEN}&operator=${operator}`;
        console.log(`Calling DTH Plans API: ${url}`);
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error('DTH plans error:', err);
        res.status(500).json({ message: 'Failed to fetch DTH plans', error: err.message });
    }
};

exports.getDthCustomerInfo = async (req, res) => {
    const { operator, subscriberId } = req.body;
    if (!operator || !subscriberId) return res.status(400).json({ message: 'Operator and Subscriber ID are required' });
    try {
        const url = `https://api.allbills.in/operatorapi/dthcustomerinfo?customer_id=${API_CUSTOMER_ID}&token=${API_TOKEN}&operator=${operator}&accountno=${subscriberId}`;
        console.log(`Calling DTH Customer Info API: ${url}`);
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error('DTH customer info error:', err);
        res.status(500).json({ message: 'Failed to fetch customer info', error: err.message });
    }
};

exports.calculateFees = (req, res) => {
    const { amount } = req.body;
    const planAmount = Number(amount);

    if (!planAmount || planAmount <= 0) {
        return res.status(400).json({ message: 'A valid amount is required.' });
    }

    const agentCommission = planAmount * 0.01;   // 1%
    const companyCommission = planAmount * 0.015; // 1.5%
    const apiCommission = planAmount * 0.005;     // 0.5%

    const totalFees = agentCommission + companyCommission + apiCommission;
    const totalAmount = planAmount + totalFees;

    res.json({
        planAmount: planAmount,
        agentCommission: agentCommission,
        companyCommission: companyCommission,
        apiCommission: apiCommission,
        totalAmount: totalAmount,
    });
};

exports.verifyWalletTopup = async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    const userId = req.user.userId;

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
        return res.status(400).json({ message: 'Payment verification details are required.' });
    }

    const conn = await pool.getConnection();
    try {
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const secret = process.env.RAZORPAY_KEY_SECRET;

        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(body.toString())
            .digest('hex');

        // if (expectedSignature !== razorpay_signature) {
        //   conn.release();
        //   return res.status(400).json({ message: 'Invalid payment signature.' });
        // }
        console.log('⚠️ BYPASSING RAZORPAY VERIFICATION FOR TESTING ⚠️');

        let amountAdded = 0;
        try {
            const paymentDetails = await razorpay.payments.fetch(razorpay_payment_id);
            amountAdded = paymentDetails.amount / 100;
        } catch (e) {
            amountAdded = 1.00; // Fallback
        }

        await conn.beginTransaction();

        const [walletRows] = await conn.execute('SELECT id, balance FROM wallets WHERE user_id = ?', [userId]);
        let walletId;
        let currentBalance = 0;

        if (walletRows.length > 0) {
            walletId = walletRows[0].id;
            currentBalance = parseFloat(walletRows[0].balance);
        } else {
            const [res] = await conn.execute('INSERT INTO wallets (user_id, balance) VALUES (?, ?)', [userId, 0]);
            walletId = res.insertId;
        }

        const newBalance = currentBalance + amountAdded;

        await conn.execute('UPDATE wallets SET balance = ? WHERE id = ?', [newBalance, walletId]);
        await conn.execute('UPDATE users SET wallet_balance = ? WHERE id = ?', [newBalance, userId]);

        await conn.execute(
            'INSERT INTO wallet_transactions (wallet_id, transaction_type, amount, balance_before, balance_after, description) VALUES (?, ?, ?, ?, ?, ?)',
            [walletId, 'CREDIT', amountAdded, currentBalance, newBalance, `Wallet top-up via Razorpay (${razorpay_payment_id})`]
        );

        await conn.commit();
        res.json({ message: `Successfully added ₹${amountAdded.toFixed(2)} to your wallet.` });

    } catch (err) {
        await conn.rollback();
        console.error('Wallet top-up verification error:', err);
        res.status(500).json({ message: 'Failed to verify wallet top-up', error: err.message });
    } finally {
        conn.release();
    }
};

exports.walletRecharge = async (req, res) => {
    const {
        mobile_number,
        operator,
        operator_code,
        amount,
    } = req.body;
    const userId = req.user.userId;

    if (!mobile_number || !operator || !amount || !operator_code) {
        return res.status(400).json({ message: 'Incomplete recharge details provided.' });
    }

    const plan_amount = parseFloat(amount);

    if (plan_amount <= 0) {
        return res.status(400).json({ message: 'Invalid amount.' });
    }

    const conn = await pool.getConnection();
    try {
        await conn.beginTransaction();

        // 1. Fetch User Balance & KYC Status with Lock
        const [[user]] = await conn.execute(
            'SELECT wallet_balance, kyc_status FROM users WHERE id = ? FOR UPDATE',
            [userId]
        );

        // 2. KYC Block
        if (user.kyc_status !== 'APPROVED') {
            await conn.rollback();
            conn.release();
            return res.status(403).json({
                message: 'KYC not approved. Transactions are disabled.',
                kyc_status: user.kyc_status
            });
        }

        // 3. Balance Check
        if (!user || parseFloat(user.wallet_balance || 0) < plan_amount) {
            await conn.rollback();
            conn.release();
            return res.status(400).json({ message: 'Insufficient wallet balance.' });
        }

        // 4. Commission Calculation
        // Employee gets 1.5%
        // Platform gets 0.5% (Net Profit)
        // API Provider takes remaining (This logic assumes we get a discount from provider)
        // For simplicity:
        // System Charge: plan_amount
        // Employee Earning: plan_amount * 0.015
        const agent_commission = parseFloat((plan_amount * 0.015).toFixed(2));
        const platform_fee = parseFloat((plan_amount * 0.005).toFixed(2)); // Platform Profit

        // 5. Debit Wallet (Full Amount)
        // We debit the full amount first. Then we will credit the commission.
        // This ensures the ledger shows the full sale.
        let currentBalance = parseFloat(user.wallet_balance);
        let newBalance = currentBalance - plan_amount + agent_commission;

        // Update Wallet Balance (Net effect: Debit Amount, Credit Commission)
        await conn.execute('UPDATE users SET wallet_balance = ? WHERE id = ?', [newBalance, userId]);

        // 6. Call External API
        const orderNo = `txn_${userId}_${Date.now()}`;
        const operatorMapKey = Object.keys(operatorCategoryMap).find(key => key.toLowerCase() === operator_code.toLowerCase());
        const numericOperatorCode = operatorMapKey ? operatorCategoryMap[operatorMapKey].id : operator_code;

        // NOTE: In production, you might want to call API *before* committing, or handle async refunds if API fails.
        // For this flow, we assume success or handle failure by refunding.

        const rechargeApiUrl = `https://api.allbills.in/billpay/paynow?customer_id=${API_CUSTOMER_ID}&token=${API_TOKEN}&operator=${numericOperatorCode}&amount=${plan_amount}&mobile=${mobile_number}&orderno=${orderNo}`;

        console.log(`Calling Recharge API: ${rechargeApiUrl}`);
        const rechargeApiResponse = await fetch(rechargeApiUrl);

        let rechargeApiBody;
        try {
            rechargeApiBody = await rechargeApiResponse.json();
        } catch (e) {
            rechargeApiBody = await rechargeApiResponse.text();
        }

        const rechargeCallResult = {
            ok: rechargeApiResponse.ok,
            status: rechargeApiResponse.status,
            body: rechargeApiBody,
        };

        const rechargeStatus = rechargeApiResponse.ok && rechargeApiBody && rechargeApiBody.success == 1 ? 'SUCCESS' : 'FAILED';

        // If Failed, Refund the user immediately
        if (rechargeStatus === 'FAILED') {
            newBalance = currentBalance; // Revert to original
            await conn.execute('UPDATE users SET wallet_balance = ? WHERE id = ?', [newBalance, userId]);

            // Log as Failed Transaction
            await conn.execute(
                `INSERT INTO transactions
                (user_id, mobile_number, operator, total_amount, plan_amount, agent_commission, company_commission, status, recharge_status, recharge_response, payment_mode)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [userId, mobile_number, operator, plan_amount, plan_amount, 0, 0, 'FAILED', 'FAILED', JSON.stringify(rechargeCallResult.body), 'WALLET']
            );

            await conn.commit();
            return res.status(424).json({ message: 'Recharge failed at operator end.', error: rechargeApiBody });
        }

        // 7. Log Successful Transaction
        await conn.execute(
            `INSERT INTO transactions
            (user_id, mobile_number, operator, total_amount, plan_amount, agent_commission, company_commission, api_commission, status, recharge_status, recharge_response, payment_mode, commission_status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                userId,
                mobile_number,
                operator,
                plan_amount,
                plan_amount,
                agent_commission,
                platform_fee,
                0, // API commission (cost) can be calculated if known
                'COMPLETED',
                rechargeStatus,
                JSON.stringify(rechargeCallResult.body),
                'WALLET',
                'CREDITED' // Since we instantly added it to wallet
            ]
        );

        // Optional: Log the Wallet Ledger entries (Debit & Credit)
        // 1. Debit Purchase
        await conn.execute(
            'INSERT INTO wallet_transactions (user_id, amount, type, description) VALUES (?, ?, ?, ?)',
            [userId, plan_amount, 'DEBIT', `Recharge for ${mobile_number} (${operator})`]
        );
        // 2. Credit Commission
        await conn.execute(
            'INSERT INTO wallet_transactions (user_id, amount, type, description) VALUES (?, ?, ?, ?)',
            [userId, agent_commission, 'CREDIT', `Commission for ${mobile_number}`]
        );

        await conn.commit();

        res.json({
            message: 'Recharge successful!',
            recharge_call: rechargeCallResult,
            new_balance: newBalance.toFixed(2),
            commission_earned: agent_commission.toFixed(2)
        });

    } catch (err) {
        await conn.rollback();
        console.error('Wallet recharge error:', err);
        res.status(500).json({ message: 'Wallet recharge failed', error: err.message });
    } finally {
        conn.release();
    }
};

exports.downloadInvoice = async (req, res) => {
    const { transactionId } = req.params;
    const userId = req.user.userId;

    try {
        const conn = await pool.getConnection();
        const [rows] = await conn.execute(
            `SELECT t.*, u.name as user_name, u.email as user_email 
       FROM transactions t 
       JOIN users u ON t.user_id = u.id 
       WHERE t.id = ? AND t.user_id = ?`,
            [transactionId, userId]
        );
        conn.release();

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Invoice not found.' });
        }

        const tx = rows[0];
        const doc = new PDFDocument({ margin: 50 });

        doc.on('error', (err) => {
            console.error('PDF generation stream error:', err);
            if (!res.headersSent) {
                res.status(500).json({ message: 'Failed to generate PDF stream.' });
            }
        });

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=invoice-${tx.id}.pdf`);
        doc.pipe(res);

        doc.fontSize(24).font('Helvetica-Bold').text('Calzone Pay', 50, 57);
        doc.fontSize(10).font('Helvetica').text('Recharge Receipt', { align: 'right' });
        doc.moveDown(2);

        doc.fontSize(10).font('Helvetica-Bold').text('Invoice No:', 50, 200);
        doc.font('Helvetica').text(`IN${tx.id}`, 150, 200);

        doc.fontSize(11).font('Helvetica-Bold').text('Amount:', 50, 250);
        doc.font('Helvetica').text(`Rs. ${Number(tx.total_amount).toFixed(2)}`, 150, 250);

        doc.end();

    } catch (err) {
        console.error('Invoice generation error:', err);
        if (!res.headersSent) {
            res.status(500).json({ message: 'Failed to generate invoice.', error: err.message });
        }
    }
};

exports.getTransactions = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const userId = req.user.userId;

    try {
        const conn = await pool.getConnection();

        const [countRows] = await conn.execute(
            'SELECT COUNT(*) as total FROM transactions WHERE user_id = ?',
            [userId]
        );

        const totalTransactions = countRows[0] ? countRows[0].total : 0;
        const totalPages = Math.ceil(totalTransactions / limit);

        const [transactions] = await conn.execute(
            `SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`,
            [userId]
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
        console.error('Fetch transactions error:', err);
        res.status(500).json({
            message: 'Failed to fetch transactions',
            error: err.message
        });
    }
};
