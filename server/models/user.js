const { mongoose } = require('../db');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    nicheType: {
        type: String,
        required: true,
    },
    business: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // the list of rooms or messages they would have access to
    participants:{
        type: [mongoose.Schema.Types.ObjectId],
        ref:'Conversation',
        default: [],
        required: true,
    }
}, 
{ timestamps: true });

module.exports = mongoose.model("User", UserSchema);
