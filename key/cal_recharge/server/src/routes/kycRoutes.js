const express = require('express');
const router = express.Router();
const kycController = require('../controllers/kycController');
const upload = require('../middleware/uploadMiddleware');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/submit-all', authenticateToken, upload.fields([
    { name: 'aadhaarFile', maxCount: 1 },
    { name: 'panFile', maxCount: 1 },
    { name: 'addressFile', maxCount: 1 }
]), kycController.submitKyc);


router.get('/image/:userId/:type', kycController.getKycImage);
router.get('/status', authenticateToken, kycController.getKycStatus);

module.exports = router;
