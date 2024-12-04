const dotEnv = require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
const { dbConnect } = require("./db");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const message = require("./Routers/Message");
const Rooms = require("./Routers/Rooms");
const profile = require('./Routers/Profiles')
const login = require('./Routers/Login')
const notification = require('./Routers/Notification')


app.use(express.json());
app.use(cors());
app.use(cookieParser());



app.use("/messages", message);
app.use("/Rooms", Rooms);
app.use('/profile',profile)
app.use('/login',login)
app.use('/notifications',notification)



app.listen(PORT, () => {
  dbConnect();
  console.log(`Listening on PORT ${PORT}`);
  console.log("happy coding!");
});
