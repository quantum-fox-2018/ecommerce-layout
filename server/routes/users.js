const express = require('express')
const router = express.Router()
const token = require('../middlewares/token')

const userController = require('../controllers/user')

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
router.get('/', token.verify, userController.readUser)
router.put('/:id', token.verify, userController.updateUser)
router.delete('/:id', token.verify, userController.deleteUser)

module.exports = router