var express = require('express');
var router = express.Router();
const { test,showTransaction, addTransaction, updateTransaction, removeTransaction, checkout} = require('../controllers/transactionController')

router.get('/', showTransaction)
router.post('/', addTransaction)
router.put('/:id', updateTransaction)
router.delete('/:id', removeTransaction)
router.get('/checkout', checkout)
router.get('/test', test)
module.exports = router;
