const express = require('express');
const router = express.Router();
const { getAllUser, addUser, editUser, deleteUser, login } = require('../controllers/users.controller')

/* GET users listing. */
router.get('/', getAllUser)
router.post('/register', addUser)
router.post('/login', login)
router.put('/:_id', editUser)
router.delete('/:_id', deleteUser)

module.exports = router;
