const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, 'email is required!'],
    unique: true
  },
  password: String,
  address: String,
  role: String
},{
  timestamps: true
});

userSchema.pre('save', function(next) {
  let hash = bcrypt.hashSync(this.password, salt)
  
  this.password = hash
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User
 