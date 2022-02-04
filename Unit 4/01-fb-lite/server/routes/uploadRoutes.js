const express = require('express');
const router = express.Router();

const {uploadProductImage} = require('../controllers/uploadPicToCloudinary')

router.route('/').post(uploadProductImage)

module.exports = router