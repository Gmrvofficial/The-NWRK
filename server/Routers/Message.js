const Message = require('../models/message')

const express = require('express')
const router = express.Router()



router.get("/", async (req,res)=>{
    try{
        const letter = await Message.find();

        res.send(letter);
    } catch (err){
        console.error('Error fetching Messages:', err);
        res.status(500).send(err.message);
    }

})

router.post("/newMessage", async (req,res)=>{
    try{
        const newMessage = new Message(req.body);

        await newMessage.save();

        console.log(newMessage);
        
        res.send(newMessage);

    } catch (err){
        console.error('Error creating messages:', err);
        res.status(500).send(err.message);
    }

})

router.put("/Edit/:messageiD", async (req,res)=>{
    try{
        const messID = req.params.messageiD
        const updateData = req.body
        const updatedEvent = await Message.findByIdAndUpdate(messID, updateData,{new:true})
        
        // send message that new room is added
        res.send(`Event updated`);
        

    } catch (err){
        console.error('Error creating messages:', err);
        res.status(500).send(err.message);
    }

})

router.delete("/Delete/:messageiD", async (req,res)=>{
    try{
        const messID = req.params.messageiD
        const deletedData = req.body
        const updatedEvent = await Message.findByIdAndDelete(messID, deletedData,{new:true})
        
        // send message that new room is added
        res.send(`Event deleted`);
        

    } catch (err){
        console.error('Error creating messages:', err);
        res.status(500).send(err.message);
    }

})

module.exports = router