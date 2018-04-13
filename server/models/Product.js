const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Productschema = new Schema({
  picture: { type: String, default: 'https://www.goapotik.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/no-image_7.jpg' },
  title: String,
  price: Number,
  stock: Number,
},{timestamps:true})

const Product = mongoose.model('Product',Productschema)

module.exports = Product;
