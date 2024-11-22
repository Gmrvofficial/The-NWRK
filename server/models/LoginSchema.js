const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({

    email:{
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    username:{
        type: String,
        unique:true,
    }
})


module.exports = ('LoginSchema', LoginSchema)