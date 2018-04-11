const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
  userId:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  itemId: {
    type: Schema.Types.ObjectId,
    ref:'Item'
  },
  qty: Number,
  unitPrice: Number,
  status: {
    type: String,
    default: 'pending'
  }
},{
  timestamps: true
})

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction