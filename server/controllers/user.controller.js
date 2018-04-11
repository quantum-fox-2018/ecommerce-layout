const userSchema = require('../models/Users')
const bcrypt = require('bcrypt')
const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)
const jwt = require('jsonwebtoken')

class Users {
  static read(req,res){
    userSchema.find()
    .then(data=>{
      res.status(200).json({
        message:'this is list of users',
        data
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static createAdmin(req,res){
    let password = bcrypt.hashSync(req.body.password,salt)
    let user = {
      username:req.body.username,
      password:password,
      email:req.body.email,
      role:'admin'
    }
    userSchema.create(user)
    .then(data=>{
      res.status(200).json({
        message:'create admin successfully',
        data
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static signup(req,res){
    let password = bcrypt.hashSync(req.body.password,salt)
    let user = {
      username:req.body.username,
      password:password,
      email:req.body.email,
      role:'user'
    }
    userSchema.create(user)
    .then(data=>{
      res.status(200).json({
        message:'user created successfully',
        data
      })
    })
    .then(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static signin(req,res){
    let password = req.body.password
    let target = {
      email:req.body.email
    }
    userSchema.findOne(target)
    .then(user=>{
      if(user){
        let clarify = bcrypt.compareSync(password,user.password)
        if(clarify){
          let payload = {
            _id:user._id,
            name:user.username,
            role:user.role
          }
          jwt.sign(payload,'secret key',(err,token)=>{
            if(err){
              res.status(500).json({
                message:'something went wrong',
                err
              })
            } else {
              res.status(200).json({
                message:'berhasil signin',
                token:token,
                id:payload._id,
                role:payload.role,
                username:payload.name
              })
            }
          })
        } else {
          res.status(403).json({
            message:'your password is wrong'
          })
        }
      } else {
        res.status(500).json({
          message:'user is not found'
        })
      }
    })
  }
  
  static delete(req,res){
    userSchema.findByIdAndRemove(req.params.id)
    .then(data=>{
      res.status(200).json({
        message:'delete user success'
        , data
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }
}

module.exports = Users