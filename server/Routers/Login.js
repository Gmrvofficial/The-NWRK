const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const AuthenticateTKN = require('../middleware/Auth')
const Login = require('../models/LoginSchema')
const express = require('express')
const router = express.Router()
const SECRET_KEY = process.env.key


router.post('/register', async (req,res)=>{
   const {email,password,username} = req.body
   //hashed/encrypted password
   const hashedPass = await bcrypt.hash(password,10)
    const newUser = new Login({email,password:hashedPass,username})


    try{
        const existingUsers = await Login.findOne({email})
        if (existingUsers){
            return res.status(409).send('User already exists')
        }

        await newUser.save()

        console.log('User Login Successful');
        return(
            res.status(201)
            .send('Login Successful')
        )
    }catch(err){
        return(
            res.status(401).send('unable to login'),
            console.error('User Login failed',err)
        )
        
    }

})

router.post('/Login', async (req,res)=>{
    
    try{
       // destructure the email and password
        const {email,password} = req.body

        //find users
        const user = await Login.findOne({email})

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