const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const timestamps = require('goodeggs-mongoose-timestamps')

const hash = require('../middlewares/hash')

const Schema = mongoose.Schema

let userSchema = new Schema ({
  email: {
    type: String,
    unique: true,
    required: [true, 'Please insert your email']
  },
  password: {
    type: String,
    minlength: [6, 'Password must contains min 6 char']
  },
  role: {
    type: String,
    default: 'user'
  }
})
//plugin
userSchema.plugin(timestamps)
userSchema.plugin(uniqueValidator, { message: '{PATH} has been used' })

//hook - password
userSchema.pre('save', function(next) {
  if(this.password) {
    this.password = hash.generate(this.password)
  }
  next()
})

let user = mongoose.model('User', userSchema)

module.exports = user