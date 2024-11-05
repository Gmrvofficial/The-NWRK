const mongoose = require('mongoose'); // Import mongoose directly
const MessageSchema = require('./message'); // Import the message schema

const RoomSchema = new mongoose.Schema({
    name: { // Define the name field
        type: String,
        required: true,
        unique: true // Optional: ensures room names are unique
    },

    // Define an array of MessageSchema
    messages: [MessageSchema], 

    createdAt: { 
        type: Date, // Specify the type for createdAt
        default: Date.now, // Set default to current date and time
        required: true
    }
});

// Export the Room model
module.exports = mongoose.model('Room', RoomSchema);
