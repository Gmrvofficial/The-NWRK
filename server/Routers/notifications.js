const express = require('express')
const router = express.Router()
const notification = require('../models/notifications')
const AuthenticateTKN = require('../middleware/Auth')
const message = require('../models/message')

router.get('/', AuthenticateTKN, async (req,res)=>{
    
    try{
        const allNotes= await notification.find()
        
        res.status(200).send(allNotes)
    }catch(err){
        res.status(500).json({message:'Unable to send Notifications'})
        console.error(err)
    }

})
 router.delete('/delete/:id',AuthenticateTKN,async (req,res)=>{
    try{
        const ID = req.params.id 
        const deletedNotes = await notification.findByIdAndDelete(ID)
        if(!deletedNotes){
            res.status(404).json({message:'Notification not found'})
        }

    }catch{
        res.status(500).json({message:'Unable to DELETE Notification'})
    }
 })