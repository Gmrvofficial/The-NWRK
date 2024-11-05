const mongoose = require('mongoose')
const DB_URL = process.env.DB_URL
// this is required before you create your model schemas beecause it needs to be imported in


// now defing and establish a link to MongoDB Compass with a new variable named DB-connect

const dbConnect = async () => {
//what do i want it to do?
//ANSWER: this needs to AWAIT the monodb URL connection  \with a TRY/CATCH

try{
    await mongoose.connect(process.env.DB_URL)
    console.log(`database connected to: ${process.env.DB_URL}`)
}catch{
    console.log(`cannot connect to ${DB_URL}`);

}}


module.exports = { dbConnect, mongoose }