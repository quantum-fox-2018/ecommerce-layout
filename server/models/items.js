const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  sku: String,
  name: String,
  description: String,
  price: String,
  category: String,
  image: String
},{
  timestamps: true
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item
