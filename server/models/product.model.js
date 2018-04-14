const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const productSchema = new Schema({
    name : {
        type : String,
    },
    price : {
        type : Number,
    },
    stock : {
        type : Number,
    },
    image: {
       type : String, 
    },
},{
    timestamps: true
})



let Todo = mongoose.model('Products', productSchema)

module.exports = Todo
