var express = require('express');
var router = express.Router();
const {signUp, signIn, signInAdmin} = require('../controllers/usersController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', signUp)
router.post('/signin', signIn)
router.post('/signinadmin', signInAdmin)

module.exports = router;
