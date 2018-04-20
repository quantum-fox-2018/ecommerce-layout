const User = require('../models/user')
const Token = require('../middlewares/token')
const Hash = require('../middlewares/hash')

module.exports = {
  signup: function (req, res) {
    let {email, password, role} = req.body
    let newUser = new User ({
      email, password, role
    })

    newUser.save(function (err) {
      if (err) return res.status(500).json({message: err.message})

      res.status(201).json({
        message: 'success to create an user',
        token: Token.generate({
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          role: newUser.role
        })
      })
    })
  },

  signin: function (req, res) {
    let {email, password} = req.body

    User.findOne({email}, (err, user) => {
      if(err) res.status(500).json({message: err.message})
      
      if(!user) {
        res.status(404).json({message: 'Email is not found'})
      } else {
        if(!Hash.verify(password, user.password)) {
          res.status(404).json({message: 'Password is wrong'})
        } else {
          res.status(200).json({
            message: 'success login',
            token: Token.generate({
              id: user._id,
              username: user.username,
              email: user.email,
              role: user.role
            })
          })
        }
      }
    })
  },

  readUser: function (req, res) {
    User.find(function (err, users) {
      if (err) return res.status(500).json({message: err.message})

      res.status(200).json({
        message: 'success to access user page',
        data: users
      })
    })
  },

  updateUser: function (req, res) {
    let idUser = req.params.id
    let {updateEmail, updatePassword, updateRole} = req.body
    let updateUser = {
      email: updateEmail,
      password: updatePassword, 
      role: updateRole
    }

    User.findByIdAndUpdate(idUser, updateUser, function (err) {
      if (err) return res.status(500).json({message: err.message})

      res.status(200).json({
        message: 'success to edit an user',
        data: updateUser
      })
    })
  },

  deleteUser: function (req, res) {
    let idUser = req.params.id

    User.findByIdAndRemove(idUser, function (err) {
      if (err) return res.status(500).json({message: err.message})

      res.status(200).json({
        message: 'success to delete an user'
      })
    })
  }
}