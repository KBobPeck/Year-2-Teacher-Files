const router = require('express').Router()
const authMiddleware = require('../middleware/authMiddleware')
const {searchUsers} = require('../controllers/search')

router.route('/').get(authMiddleware, searchUsers)

module.exports = router