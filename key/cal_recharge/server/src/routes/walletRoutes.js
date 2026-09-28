const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/balance', authenticateToken, walletController.getBalance);
router.post('/withdraw-commission', authenticateToken, walletController.withdrawCommission);
router.get('/history', authenticateToken, walletController.getHistory);

module.exports = router;
