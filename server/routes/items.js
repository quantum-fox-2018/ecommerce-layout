const Items = require('../controllers/item.controller')
var express = require('express');
var router = express.Router();
const Auth = require('../middleware/auth')

/* GET users listing. */
router.get('/',Items.read)
router.get('/:id',Auth.login,Auth.admin,Items.findOne)
router.post('/',Auth.login,Auth.admin,Items.create)   
router.put('/:id',Auth.login,Auth.admin,Items.update)
router.delete('/:id',Auth.login,Auth.admin,Items.delete)

module.exports = router;