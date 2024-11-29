const mongoose = require('mongoose')
const user = require('./User')


const NotificationSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required: true,
    },
    createdAt:{
        type:Date,
        default: Date.now,
        required: true
    }

})

module.exports = mongoose.model('Notifications', NotificationSchema)