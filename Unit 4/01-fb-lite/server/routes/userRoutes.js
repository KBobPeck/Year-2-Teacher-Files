const express = require("express");
const router = express.Router();

const {getUserNameAvailable, createUser, postLoginAuth } = require('../controllers/user')

router.route('/signup').post(createUser)
router.route('/login').post(postLoginAuth)
router.route('/:username').get(getUserNameAvailable)

module.exports = router;
