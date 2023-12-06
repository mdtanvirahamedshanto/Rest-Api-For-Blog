const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;



app.get('/', (req, res )=>{
    res.send("hello world");
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});