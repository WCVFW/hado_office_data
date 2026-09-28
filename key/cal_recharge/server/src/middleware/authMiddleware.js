const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token expired' });
            }
            return res.status(403).json({ message: 'Invalid token' });
        }

        // --- SLIDING SESSION IMPLEMENTATION ---
        const payload = {
            userId: user.userId,
            email: user.email,
            role: user.role,
            kyc_status: user.kyc_status,
        };

        const refreshedToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '30m' });

        // Send the new token back in a custom header.
        res.setHeader('X-Auth-Token', refreshedToken);

        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
