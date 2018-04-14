const express = require('express');
const router = express.Router();
const { getAllItem, getItem, addItem, editItem, deleteItem } = require('../controllers/items.controller')
const { addToCart, showCart} = require('../controllers/itemCons')
const { getPublicUrl, sendFileGCS, multer } = require('../middlewares/uploadGCS')

router.get('/', getAllItem)
router.get('/:_id', getItem)
router.post('/', multer.single('img'), sendFileGCS, addItem)
router.put('/:_id', editItem)
router.delete('/:_id', deleteItem)
router.get('/cart', showCart)
router.post('/cart', addToCart)

module.exports = router;
