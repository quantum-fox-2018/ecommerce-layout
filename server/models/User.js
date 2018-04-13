const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Userschema = new Schema({
  email:{
    type:String,
    unique: true,
    required : [true,'email cannot be empty'],
    validate : [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'email is not valid']
  },
  password:String,
  status:String
},{timestamps:true})

const User = mongoose.model('User',Userschema)

module.exports = User;
