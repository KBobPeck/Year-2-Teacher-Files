const express = require('express');
const router = express.Router();

const {getUserNameAvailable, createUser, getLoginAuth } = require('../controllers/signup')

router.route('/').post(createUser)
router.route('/:username').get(getUserNameAvailable)

module.exports = router