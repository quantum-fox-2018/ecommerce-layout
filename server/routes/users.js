var express = require('express');
var router = express.Router();
const usercontrollers = require('../controllers/usercontrollers')

/* GET users listing. */
router.post('/login',usercontrollers.login)
router.post('/register',usercontrollers.register)

module.exports = router;
