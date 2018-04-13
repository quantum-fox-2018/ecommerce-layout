const User = require('../models/User')
const jwt  = require('jsonwebtoken')

module.exports = {
  login (req,res){
    User.findOne({email:req.body.email, password:req.body.password}).then(data => {
      if (data) {

        let token = jwt.sign({id: data._id,email: data.email,status:data.status},'secretkey')
        res.status(200).json({
          message: "anda berhasil login",
          token,
          id:data._id,
          status:200
        })

      }
      else {
        res.status(401).json({
          message: "email atau password kagak bener cuk"
        })
      }
    }).catch(err => {
      res.status(400).json({
        messag: "error bung"
      })
    })

  },
  register (req,res) {
    User.create({
      email : req.body.email,
      password : req.body.password,
      status : req.body.status,
    }, (err,data) => {
        if (err) {
            res.status(400).json({
                message : 'error email',
                data : err
            })
        }
        res.status(200).json({
          message: 'success register',
          data
        })
      })
  }
}
