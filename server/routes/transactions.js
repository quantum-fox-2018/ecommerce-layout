var express = require('express');
var router = express.Router();
const {addTransaction, showTransaction, removeTransaction, updateTransaction, showCheckout} = require('../controllers/transactionController')
const {authUser} = require('../middlewares/auth')

router.get('/', showTransaction)
router.post('/', authUser, addTransaction)
router.put('/:id', authUser, updateTransaction)
router.delete('/:id', authUser, removeTransaction)
router.get('/checkout', authUser, showCheckout)


module.exports = router;
