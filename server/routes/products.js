const express = require('express');
const multer = require('multer');
const router = express.Router();

const productController = require('../controllers/product')
const uploadMidleware = require('../middlewares/upload')
const token = require('../middlewares/token')

router.get('/', productController.readProducts);
router.get('/:id', productController.readProduct);
router.post('/', uploadMidleware.multer.single('image'), uploadMidleware.upload, productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteArticle);

module.exports = router;