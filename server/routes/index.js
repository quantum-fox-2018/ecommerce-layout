var express = require('express');
var router = express.Router();
const admincontroller = require('../controllers/admincontroller')
const {sendUploadToGCS} = require('../middlewares/uploadGCS')
const memUpload = require('../middlewares/upload')

router.post('/addproduct',memUpload.single('picture'), sendUploadToGCS,admincontroller.addproduct)
router.post('/unaddproduct',admincontroller.unaddproduct)
router.get('/showproduct',admincontroller.showproduct)
router.delete('/deleteproduct/:id',admincontroller.deleteproduct)
router.put('/updateproduct/:id',admincontroller.updateproduct)

module.exports = router;
