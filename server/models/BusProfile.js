const {mongoose} = require('../db')

const BusProfile = new mongoose.Schema({

   Name : {
    type: String,
    Required: true,
   },
   Niche:{
      type: String,
      Required:true
   },
   
})

module.exports = mongoose.model("BusProfile", BusProfile);