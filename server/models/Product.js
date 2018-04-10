const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Productschema = new Schema({
  picture: { type: String, default: 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg' },
  title: String,
  price: Number,
  stock: Number,
},{timestamps:true})

const Product = mongoose.model('Product',Productschema)

module.exports = Product;
