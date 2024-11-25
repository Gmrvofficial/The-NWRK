const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({

    email:{
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
    },
    username:{
        type: String,
        unique:true,
        required:true
    }
})


module.exports = mongoose.model('Login', LoginSchema)