const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const transporter = require('../config/email');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

exports.register = async (req, res) => {
    const { firstName, lastName, name: legacyName, email, phone, password } = req.body;
    const name = legacyName || `${firstName} ${lastName}`;

    if (!name || !email || !phone || !password) {
        return res.status(400).json({ message: 'All fields required' });
    }

    try {
        const conn = await pool.getConnection();

        // Check if user exists
        const [rows] = await conn.execute('SELECT id FROM users WHERE email = ?', [email]);
        if (rows.length > 0) {
            conn.release();
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user with PENDING status
        await conn.execute(
            'INSERT INTO users (name, email, phone, password, kyc_status) VALUES (?, ?, ?, ?, ?)',
            [name, email, phone, hashedPassword, 'PENDING']
        );

        conn.release();
        res.status(201).json({ message: 'Signup successful. Please complete KYC.' });
    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({ message: 'Signup failed', error: err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
    }

    try {
        const conn = await pool.getConnection();
        const [rows] = await conn.execute('SELECT * FROM users WHERE email = ?', [email]);
        conn.release();

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = rows[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                role: user.role,
                kyc_status: user.kyc_status,
            },
            JWT_SECRET,
            { expiresIn: '30m' }
        );

        res.json({
            token,
            user: { id: user.id, name: user.name, email: user.email, role: user.role },
            message: 'Login successful'
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Login failed', error: err.message });
    }
};

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });

    try {
        const conn = await pool.getConnection();
        const [rows] = await conn.execute('SELECT id FROM users WHERE email = ?', [email]);

        if (rows.length === 0) {
            conn.release();
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry

        // Save OTP to DB
        await conn.execute('UPDATE users SET reset_otp = ?, reset_otp_expires = ? WHERE email = ?', [otp, expiresAt, email]);
        conn.release();

        // Send Email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset OTP - Calzone Pay',
            text: `Your OTP for password reset is: ${otp}. It is valid for 10 minutes.`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Email send error:', error);
                return res.status(500).json({ message: 'Failed to send OTP email' });
            }
            res.json({ message: 'OTP sent to your email' });
        });

    } catch (err) {
        console.error('Forgot password error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) {
        return res.status(400).json({ message: 'Email, OTP, and new password are required' });
    }

    try {
        const conn = await pool.getConnection();
        const [rows] = await conn.execute(
            'SELECT id, reset_otp, reset_otp_expires FROM users WHERE email = ?',
            [email]
        );

        if (rows.length === 0) {
            conn.release();
            return res.status(404).json({ message: 'User not found' });
        }

        const user = rows[0];

        if (user.reset_otp !== otp) {
            conn.release();
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        if (new Date() > new Date(user.reset_otp_expires)) {
            conn.release();
            return res.status(400).json({ message: 'OTP has expired' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await conn.execute(
            'UPDATE users SET password = ?, reset_otp = NULL, reset_otp_expires = NULL WHERE id = ?',
            [hashedPassword, user.id]
        );

        conn.release();
        res.json({ message: 'Password reset successful. You can now login.' });

    } catch (err) {
        console.error('Reset password error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getMe = async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const [rows] = await conn.execute(
            'SELECT id, name, email, phone, role, kyc_status FROM users WHERE id = ?',
            [req.user.userId]
        );
        conn.release();

        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = rows[0];
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            kyc_status: user.kyc_status,
            is_active: user.kyc_status === 'APPROVED',
        });
    } catch (err) {
        console.error('Auth/me error:', err);
        res.status(500).json({ message: 'Failed to fetch user', error: err.message });
    }
};

exports.updateProfile = async (req, res) => {
    const { name, email } = req.body;
    const userId = req.user.userId;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required.' });
    }

    try {
        const conn = await pool.getConnection();
        await conn.execute('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, userId]);
        conn.release();
        res.json({ message: 'Profile updated successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to update profile', error: err.message });
    }
};
