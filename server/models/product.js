const mongoose = require('mongoose')
const timestamps = require('goodeggs-mongoose-timestamps')

const Schema = mongoose.Schema;

const productSchema = new Schema ({
  name: {
    type: String
  },
  desc: {
    type: String
  },
  image: {
    type: String,
    default: ''
  },
  stock: {
    type: Number
  },
  price: {
    type: Number
  }
})
//plugin
productSchema.plugin(timestamps)

let ProductSchema = mongoose.model('Product', productSchema)

module.exports = ProductSchema
