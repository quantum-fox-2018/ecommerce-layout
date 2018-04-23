const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'Items' },
  items: [{ type: Schema.Types.ObjectId, ref: 'Items' }],
  totalPrice: Number
})

module.exports = mongoose.model('Transaction',transactionSchema)