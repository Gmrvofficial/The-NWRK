const express = require("express");
const jwt = require("jsonwebtoken");

const secret_key = process.env.key;
//
const AuthenticateTKN = (req, res, next) => {
  //retrieve authentication header
  const authHeader = req.headers.authorization;
  //extract the token from header
  const token = authHeader && authHeader.split(" ")[1]; //get the bearer token

  //conditional for access denied
  //if there is noo token,send a denied message 
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." }); //if no token, send a 401
    }

    // try-catch for signing the secret key and token
    try{
      //verify decodes the token once it sees the secret key
      const decoded = jwt.verify(token,secret_key)

      req.user = decoded
      next()

    }catch(err){
      console.error(err)
      res.status(403).json({message: 'invalid token'})
    }

}

module.exports = AuthenticateTKN;