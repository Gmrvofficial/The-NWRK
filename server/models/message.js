const {mongoose} = require('../db')

const MessageSchema = new mongoose.Schema({

    createdAt:{
        type:Date,
        default: Date.now
    },
    username:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true,
    }

},{timestamps:true})


module.exports = MessageSchema;