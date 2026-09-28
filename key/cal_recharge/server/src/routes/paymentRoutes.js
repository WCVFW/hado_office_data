const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/razorpay-order', authenticateToken, paymentController.razorpayOrder);
router.post('/create-order', authenticateToken, paymentController.createOrder);
router.post('/verify', authenticateToken, paymentController.verifyPayment); // Recharge verify
router.post('/calculate-fees', authenticateToken, paymentController.calculateFees);
router.post('/fetch-bill', authenticateToken, paymentController.fetchBill);
router.get('/plans/:operator/:circle', authenticateToken, paymentController.getPlans);
router.get('/dth-plans/:operator', authenticateToken, paymentController.getDthPlans);
router.post('/dth-info', authenticateToken, paymentController.getDthCustomerInfo);
router.post('/verify-wallet-topup', authenticateToken, paymentController.verifyWalletTopup);
router.post('/wallet-recharge', authenticateToken, paymentController.walletRecharge);
router.get('/invoice/:transactionId', authenticateToken, paymentController.downloadInvoice);
router.get('/transactions', authenticateToken, paymentController.getTransactions);

module.exports = router;
