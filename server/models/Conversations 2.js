const { mongoose } = require('../db');

const ConversationSchema = new mongoose.Schema({

    participants: {
        type: String,
        required: true,
    },
    Business: {
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
    rooms:{
        type: [ObjectId],
        required: true,
    }
}, 
{ timestamps: true });

module.exports = mongoose.model("Conversation", ConversationSchema);