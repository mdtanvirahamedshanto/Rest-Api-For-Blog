const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/connectDB');
const authRoute = require('./routes/auth/authRoute');

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;



app.use("/api", authRoute)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB() 
});