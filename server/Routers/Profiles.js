const express = require('express')
const router = express.Router()
const User = require("../models/user");
const AuthenticateTKN = require('../middleware/Auth');
const user = require('../models/user');
const bcrypt = require ('bcrypt')

router.get('/',AuthenticateTKN,async (req,res)=>{
    try{
        const currentUser= await User.findOne({ _id:req.user.userID})
        if(!currentUser){
            return res.status(404).send('User not found')

        }

    }catch(err){
        console.log(err,'Unable to get profile');
        
        return res.send({message:"Unable to get profile"})
    }

    res.send(currentUser)
})

router.put('/update',AuthenticateTKN,async (req,res)=>{
    try{

        //destructure what i need from the req body. in this case, vvv
        const {username,password,business,nicheType,email}= req.body
        //i have to extract the user id from the authtoken vvv 
        const currentUser = await User.findOne({_id:req.user.userID})

        if(password){
            //need too hash the new password again
            const hashedPass = await bcrypt.hash(password,10)
            currentUser.password = hashedPass || currentUser.password
        }



        currentUser.username = username || currentUser.username
        currentUser.email = email || currentUser.email
        currentUser.business = business || currentUser.business
        currentUser.nicheType = nicheType || currentUser.nicheType

    }catch(err){
        console.log(err,'Unable to get profile');
        
        return res.send({message:"Unable to get profile"})
    }
})
