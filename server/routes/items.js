const Items = require('../controllers/item.controller')
var express = require('express');
var router = express.Router();
const Auth = require('../middleware/auth')
const images = require('../helpers/images')

/* GET users listing. */
router.get('/',Items.read)
router.get('/trans',Items.readTrans)
router.post('/',Auth.login,Auth.admin,images.multer.single('image'),images.sendUploadToGCS,Items.create)   
router.post('/trans',Items.transCreate)
router.delete('/:id',Auth.login,Auth.admin,Items.delete)

module.exports = router;