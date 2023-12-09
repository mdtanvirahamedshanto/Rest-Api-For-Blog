const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");
const authRoute = require("./routes/auth/authRoute");
const userRoute = require("./routes/userRoute");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
//Router
app.use("/api", authRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
