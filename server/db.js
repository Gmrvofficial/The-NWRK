const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;

// Define and establish a link to MongoDB with dbConnect
const dbConnect = async () => {
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Database connected to: ${DB_URL}`);
    } catch (error) {
        console.log(`Cannot connect to ${DB_URL}. Error: ${error.message}`);
    }
};

module.exports = { dbConnect, mongoose };
