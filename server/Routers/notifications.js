const express = require('express')
const router = express.Router()
const notification = require('../models/notifications')
const AuthenticateTKN = require('../middleware/Auth')

router.get('/', AuthenticateTKN, async (req,res)=>{
    
    try{
        const allNotes= await notification.find()
        
        res.status(200).send(allNotes)
    }catch(err){
        res.status(500).json({message:'Unable to send Notifications'})
        console.error(err)
    }

})
