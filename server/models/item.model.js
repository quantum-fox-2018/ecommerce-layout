
const mongoose = require ('mongoose')
const Schema = mongoose.Schema

let itemSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  count:Number,
  cartPrice:Number,
  image:String,
},{timestamps:true})

module.exports = mongoose.model('Items',itemSchema)