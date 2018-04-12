const mongoose = require('mongoose')
const Schema = mongoose.Schema

function emailValidation(email){
    let reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email)
}

const userSchema = new Schema({
    username:{
        type: String,
        required: ['true','must fill this name']
    },
    email:{
        type: String,
        unique:[true,'please use another email'],
        required:[true,'please fill the email'],
        validate:[emailValidation,'email format is not right']
    },
    password:String,
    role: {
        type: String
    }, 
}, {timestamps:true})

module.exports = mongoose.model('Users',userSchema)