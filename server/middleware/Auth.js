const express = require("express");
const jwt = require("jsonwebtoken");

const secret_key = process.env.key;
//
const AuthenticateTKN = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; //get the bearer token

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." }); //if no token, send a 401
  }

  try{
    const decoded = jwt.verify(token,secret_key)
    req.user = decoded
    next()
  }catch(err){
    console.error(err)
    res.status(403).json({message: 'invalid token'})
  }
}

module.exports = AuthenticateTKN;