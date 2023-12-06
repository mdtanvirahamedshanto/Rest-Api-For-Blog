const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
// const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});