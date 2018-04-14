const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
  img: String,
  name: String,
  price: Number,
  brand: String
})

const Item = mongoose.model('Item', itemSchema)

module.exports = {Item}