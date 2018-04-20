const express = require('express');
const multer = require('multer');
const router = express.Router();

const productController = require('../controllers/product')
const uploadMidleware = require('../middlewares/upload')
const token = require('../middlewares/token')


/* GET products listing. */
const uploaderMem = multer({
  storage: multer.memoryStorage(),
  limits: {
      fileSize: 10 * 1024 * 1024
  }
})

router.get('/', productController.readProducts);
router.get('/:id', productController.readProduct);
router.post('/', uploaderMem.single('image'), uploadMidleware.upload, productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteArticle);

module.exports = router;