const pool = require('../config/db');

exports.submitKyc = async (req, res) => {
    const { aadhaar, pan, address } = req.body;
    const userId = req.user.userId;

    try {
        const conn = await pool.getConnection();

        // Check if KYC already exists
        const [existing] = await conn.execute('SELECT id, aadhaar_image, pan_image, address_image FROM kyc WHERE user_id = ?', [userId]);
        const isUpdate = existing.length > 0;

        // Validation
        if (!aadhaar || !pan || !address) {
            conn.release();
            return res.status(400).json({ message: 'Aadhaar, PAN, and Address fields are required.' });
        }

        if (!isUpdate) {
            if (!req.files || !req.files.aadhaarFile || !req.files.panFile || !req.files.addressFile) {
                conn.release();
                return res.status(400).json({ message: 'All three document files (Aadhaar, PAN, Address) are required for initial submission.' });
            }
        }

        const aadhaarBuffer = req.files && req.files.aadhaarFile ? req.files.aadhaarFile[0].buffer : null;
        const panBuffer = req.files && req.files.panFile ? req.files.panFile[0].buffer : null;
        const addressBuffer = req.files && req.files.addressFile ? req.files.addressFile[0].buffer : null;

        if (isUpdate) {
            // Dynamic Update Query
            let query = 'UPDATE kyc SET aadhaar_number = ?, pan_number = ?, address = ?, status = ?';
            const params = [aadhaar, pan, address, 'PENDING'];

            if (aadhaarBuffer) { query += ', aadhaar_image = ?'; params.push(aadhaarBuffer); }
            if (panBuffer) { query += ', pan_image = ?'; params.push(panBuffer); }
            if (addressBuffer) { query += ', address_image = ?'; params.push(addressBuffer); }

            query += ' WHERE user_id = ?';
            params.push(userId);

            await conn.execute(query, params);
        } else {
            // Insert
            await conn.execute(
                'INSERT INTO kyc (user_id, aadhaar_number, pan_number, address, status, aadhaar_image, pan_image, address_image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [userId, aadhaar, pan, address, 'PENDING', aadhaarBuffer, panBuffer, addressBuffer]
            );
        }

        // Update user kyc_status
        await conn.execute('UPDATE users SET kyc_status = ? WHERE id = ?', ['PENDING', userId]);

        conn.release();
        res.json({ message: 'KYC submitted successfully. Awaiting admin approval.' });
    } catch (err) {
        console.error('KYC submit error:', err);
        res.status(500).json({ message: 'KYC submission failed', error: err.message });
    }
};

exports.getKycStatus = async (req, res) => {
    try {
        const conn = await pool.getConnection();
        // Get status from users table
        const [userRows] = await conn.execute(
            'SELECT kyc_status FROM users WHERE id = ?',
            [req.user.userId]
        );

        // Get details from kyc table
        const [kycRows] = await conn.execute(
            'SELECT aadhaar_number, pan_number, address FROM kyc WHERE user_id = ?',
            [req.user.userId]
        );

        conn.release();

        if (userRows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const details = kycRows.length > 0 ? kycRows[0] : {};

        res.json({
            kyc_status: userRows[0].kyc_status || 'NOT_UPLOADED',
            ...details
        });

    } catch (err) {
        console.error('Get KYC status error:', err);
        res.status(500).json({ message: 'Failed to fetch KYC status', error: err.message });
    }
};

exports.getKycImage = async (req, res) => {
    const { userId, type } = req.params;
    // type should be 'aadhaar', 'pan', or 'address'

    try {
        let column = '';
        if (type === 'aadhaar') column = 'aadhaar_image';
        else if (type === 'pan') column = 'pan_image';
        else if (type === 'address') column = 'address_image';
        else return res.status(400).send('Invalid image type');

        const conn = await pool.getConnection();
        const [rows] = await conn.execute(`SELECT ${column} FROM kyc WHERE user_id = ?`, [userId]);
        conn.release();

        if (rows.length === 0 || !rows[0][column]) {
            return res.status(404).send('Image not found');
        }

        const imageBuffer = rows[0][column];

        // Simple detection of content type (basic)
        // If it starts with %PDF, it's pdf. Otherwise assume image/jpeg or png.
        // For a more robust solution, use 'file-type' package, but let's stick to basic checks or default to image.
        const header = imageBuffer.toString('hex', 0, 4);
        let contentType = 'image/jpeg'; // Default

        if (header === '25504446') {
            contentType = 'application/pdf';
        } else if (header === '89504e47') {
            contentType = 'image/png';
        }

        res.set('Content-Type', contentType);
        res.send(imageBuffer);

    } catch (err) {
        console.error('Get KYC image error:', err);
        res.status(500).send('Error retrieving image');
    }
};
