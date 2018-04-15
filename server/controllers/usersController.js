const User = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  signUp: function (req, res) {
    let input = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address
    }

    User.findOne({
      email: req.body.email
    })
    .exec()
    .then(dataUser => {
      if(dataUser === null){
        User.create(input,(error, newUser) =>{
          if(!error){
            res.status(201).json({
              message: 'success adding new user',
              newUser
            })
          }else{
            res.status(400).json({
              message: "failed ad new user",
              error
            })
          }
        })
      }else{
        res.status(200).json({
          message: "email already reqistered, please use another email!",
        })
      }
    }).catch(err => {
      res.status(400).json({
        message: "sconnection error when trying find user",
        err
      })
    })
  },
  signIn: function(req, res) {
    User.findOne({
      email: req.body.email
    })
    .exec()
    .then(dataUser => {
      if(dataUser){
        let checkPass = bcrypt.compareSync(req.body.password,dataUser.password)
        if(checkPass){
          let token = jwt.sign({id:dataUser._id,email:dataUser.email},'secret')
          res.status(200).json({
            message:"login success",
            data:{
              id:dataUser._id,
              name:dataUser.name,
              email:dataUser.email,
              address: dataUser.address,
              token :token
            }
          })
        }else{
          res.status(400).json({
            message: "email/password is wrong"
          })
        }
      }else{
        res.status(400).json({
          message: "user not found, please register"
        })
      }
    }).catch(err =>{
      res.status(400).json({
        message: "connection error",
        err
      })
    })
  },
  signInAdmin: function(req, res) {
    let email =  req.body.email
    let password = req.body.password
    let id = 'admin001'

    if(email === 'admin@admin.com' && password === 'admin'){
      let token = jwt.sign({id:id, email: email},'secret')
      res.status(200).json({
        message: 'login admin success',
        admin: {
          id,
          email,
          token
        }
      })
    }else{
      res.status(400).json({
        message: 'admin only!'
      })
    }
  }
}