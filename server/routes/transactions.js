var express = require('express');
var router = express.Router();
const {addTransaction, showTransaction, removeTransaction, updateTransaction, showCheckout} = require('../controllers/transactionController')

router.get('/', showTransaction)
router.post('/', addTransaction)
router.put('/:id',updateTransaction)
router.delete('/:id', removeTransaction)
router.get('/checkout', showCheckout)


module.exports = router;
