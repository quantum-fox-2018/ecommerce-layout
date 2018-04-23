var express = require('express');
var router = express.Router();
const User = require('../controllers/user.controller')
const Auth = require('../middleware/auth')

/* GET users listing. */
router.get('/',Auth.login,Auth.admin,User.read)
router.post('/admin', User.createAdmin)
router.post('/signup',User.signup)
router.post('/signin',User.signin)
router.delete('/:id',Auth.login,Auth.admin,User.delete)

module.exports = router;