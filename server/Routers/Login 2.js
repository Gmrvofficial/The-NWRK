const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const AuthenticateTKN = require('../middleware/Auth')
const Login = require('../models/LoginSchema')
const User = require('../models/User')
const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const SECRET_KEY = process.env.key


router.post('/register', async (req,res)=>{
   const {email,password,username,nicheType,business} = req.body
   //hashed/encrypted password
    const hashedPass = await bcrypt.hash(password,10)
    const newUser = new User({email,password:hashedPass,username})


    try{
        const existingUsers = await User.findOne({email:email})
        if (existingUsers){
            return res.status(409).send('User already exists')
        }
        //handle the business input 
        if(req.body.business && typeof req.body.business!== 'string' ){
            throw new Error({message: 'Business must be a string'})
        }

        if(nicheType && !Array.isArray(nicheType)){
            return res.send('nicheType must be an array')
        }

        await newUser.save()

        console.log('User registration Successful');
        return res.status(200).json({message:'Registration Successful'})

    }catch(err){
        return(
            res.status(401).send('unable to login'),
            console.error('User Login failed',err)
        )
        
    }
    
})

router.post('/', async (req,res)=>{
    
    try{
       // destructure the email and password
       const {email,password,username,nicheType,business} = req.body

        //find users
        const user = await User.findOne({username})

        if(!user){
            return(
                res.status(401)
                .send({message:'unauthorized user'})
            )
        }
    
        //compare passwords
        const isPassValid = await bcrypt.compare(password,user.password)

        if (!isPassValid){
            return(
                res.status(401).send('Invalid Email or passwerd')
            )
        }

        const payload = {userid:user._id,email:user.email}
        const token = jwt.sign(payload,SECRET_KEY,{expiresIn:'1hr'})

        console.log('Login Successful');
        res.status(200).json({message:'Login Successful',token: token})
        
        
    }catch(err){
        return(
            res.status(500).send('unable to login'),
            console.error('User Login failed',err)
        )
        
    }

})

module.exports = router