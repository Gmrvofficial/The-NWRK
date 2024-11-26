const dotEnv = require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
const { dbConnect } = require("./db");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const message = require("./Routers/Message");
const Rooms = require("../server/Routers");
const profile= require('../server/Routers/Profiles')
const login= require('../server/Routers/Login')

app.use(express.json());
app.use(cors());
app.use(cookieParser());



app.use("/messages", message);
app.use("/Rooms", Rooms);
app.use('/profile',profile)

app.use('/login',login)


app.listen(PORT, () => {
  dbConnect();
  console.log(`Listening on PORT ${PORT}`);
  console.log("happy coding!");
});
