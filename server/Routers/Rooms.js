import AuthenticateTKN from '../middleware/Auth'

const Rooms = require('../models/Rooms')

const express = require('express')
const router = express.Router()



router.get('/',AuthenticateTKN ,async(req,res)=>{
    const getRooms = await Rooms.find()
    res.status(200).json(Rooms);
})


router.post('/newRoom',AuthenticateTKN,async(req,res)=>{
    try{
        //establishing the new room var
        const newRoom = new Rooms(req.body);
        //await the new room info from body
        await newRoom.save('');
        res.send(newRoom)

    } catch (err){
        console.error('Error creating rooom:', err);
        res.status(500).send(err.message);
    }
    
})



router.delete('/deleteRoom/:id',AuthenticateTKN,async(req,res)=>{
    try{
        //establishing the new room var
        const id = new Rooms(req.params.id);

        const deletedData = req.body
        //await the new room info from body
        const updatedData = await Rooms.FindByIdAndDelete(id,deletedData,{new:true})
        

    } catch (err){
        console.error('Error creating rooom:', err);
        res.status(500).send(err.message);
    }
    
})

export default router;