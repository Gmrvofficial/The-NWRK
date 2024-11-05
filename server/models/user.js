const {mongoose} = require('../db')

const User = new mongoose.Schema({

    nicheType: {
        type:String,
        required:true,
    },
    Business: {
        required
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
},
{timestamps:true})


module.exports = mongoose.Model("model", User)

