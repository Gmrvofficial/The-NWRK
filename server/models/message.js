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
    },
    sender:{
        type:String,
        required:true
    },
    receiver:{
        type:String,
        required:true
    }

},{timestamps:true})


module.exports = mongoose.Model('Message',MessageSchema);