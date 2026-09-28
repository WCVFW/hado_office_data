const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/b2c', authenticateToken, dashboardController.getB2CData);
router.get('/employee', authenticateToken, dashboardController.getEmployeeData);

module.exports = router;
