const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// const saltRounds = 10
// const salt = bcrypt.genSaltSync(saltRounds)

module.exports = {


    login: function (req, res) {
        let email = req.body.email
        let password = req.body.password

        if (email === 'admin' && password === 'admin') {
            let token = jwt.sign(payload, process.env.SECRETKEY)
            res.status(200).json({
                message: 'login success',
                username: username,
                password : password,
                token: token,

            })
        }
        else{
            res.status(500).json({
                message : 'username / password incorrect'
            })
        }

    }
}