const express = require('express');
const router = express.Router();

const {getLoginAuth } = require('../controllers/signup')

router.route('/').post(getLoginAuth).post(getLoginAuth)


module.exports = router