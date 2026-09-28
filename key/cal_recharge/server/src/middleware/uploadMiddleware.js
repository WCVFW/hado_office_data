const multer = require('multer');

// We'll use memory storage for simplicity. For production, consider disk storage or cloud storage.
const upload = multer({ storage: multer.memoryStorage() });

module.exports = upload;
