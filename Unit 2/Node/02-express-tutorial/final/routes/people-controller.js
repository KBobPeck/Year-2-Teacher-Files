const express = require('express')
const router = express.Router()

const {createPerson, readPerson, updatePerson, deletePerson} = require('../controllers/people')

// router.get('/', readPerson)
// router.post('/', createPerson)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(readPerson).post(createPerson)
router.route('/').put('/:id', updatePerson).delete('/:id', deletePerson)

module.exports = router
