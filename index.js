const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");
const authRoute = require("./routes/auth/authRoute");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
//Router
app.use("/user", authRoute);
app.use("/user", userRoute);
// Post Routers

app.use("/user", postRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
