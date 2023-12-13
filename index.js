const express = require("express");
const multer = require("multer");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");
const authRoute = require("./routes/auth/authRoute");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const catagoryRoute = require("./routes/catagoryRoute");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// use multer photo upload
const uploadStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: uploadStorage });

//photo upload router

app.post("/user/upload", upload.single("file"), (req, res) => {
  res.status(200).json({
    massage: "File Upload Succesfully",
  });
});

//Router
app.use("/user", authRoute);
app.use("/user", userRoute);

// Post Routers
app.use("/user", postRoute);

//catagory route
app.use("/post", catagoryRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
