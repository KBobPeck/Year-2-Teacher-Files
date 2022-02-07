const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')

const { getUserAuth } = require('../controllers/auth')

router.route('/').get(authMiddleware, getUserAuth)


module.exports = router