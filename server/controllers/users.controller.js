const {User} = require('../models/users')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require('jsonwebtoken');

module.exports = {
    getAllUser (req, res) {
        User.find()
        .exec()
        .then(users => {
            res.status(200).json({
                message: 'List User',
                users
            })
        })
    },
    addUser (req, res) {
        const hash = bcrypt.hashSync(req.body.password, salt)
        const user = new User()
        user.username = req.body.username
        user.email = req.body.email
        user.password = hash
        user.save()
        .then(data => {
            res.status(201).json({
                message: 'Success create account',
                data
            })
        })
    },
    editUser (req, res) {
        User.findOneAndUpdate({_id : req.params._id}, {$set: req.body}, {upsert: true}, (err, r) => {
            if(err){
                res.status(400).json({
                    message: 'Edit failed',
                    err
                })
            } else {
                res.status(200).json({
                    message: 'Edit successfull',
                    data: req.body
                })
            }
        })
    },
    deleteUser (req, res) {
        User.remove({_id : req.params._id}, (err, r) => {
            if(err){
                res.status(400).json({
                    message: 'Delete failed',
                    err
                })
            } else {
                res.status(200).json({
                    message: 'Delete successfull'
                })
            }
        })
    },
    login (req, res) {
        User.findOne({email: req.body.email})
        .exec()
        .then(user => {
            if(user){
                let check = bcrypt.compareSync(req.body.password, user.password)
                if(check){
                    let token = jwt.sign({_id: user._id, email: user.email, username: user.username}, process.env.SECRET)
                    res.status(200).json({
                        message: 'Login successful',
                        token
                    })
                } else {
                    res.status(409).json({
                        message: 'Password incorrect'
                    })
                }
            } else {
                res.status(409).json({
                    message: 'Email not found'
                })
            }
        })
    }
}