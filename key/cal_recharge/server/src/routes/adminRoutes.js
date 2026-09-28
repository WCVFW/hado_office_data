const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/kyc-pending', authenticateToken, adminController.getPendingKyc);
router.post('/kyc-approve', authenticateToken, adminController.approveKyc);
router.get('/stats', authenticateToken, adminController.getStats);
router.get('/transactions', authenticateToken, adminController.getTransactions);
router.get('/employees', authenticateToken, adminController.getEmployees);
router.post('/wallet/manage', authenticateToken, adminController.manageWallet);

module.exports = router;
