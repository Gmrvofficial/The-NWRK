const {mongoose} = require('../db')

const busProfile = new mongoose.Schema({

   Name : {
    type: String,
    Required: true,
   },
   location:{
      
   },
   
})