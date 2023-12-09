const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Sing Up Function
exports.singup = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const { name, username, email, password, profile } = req.body;
    const user = await User.create({
      name,
      username,
      email,
      password,
      profile,
    });
    res.status(201).json({
      massage: `Hello ${name} ! You Account created Succesfully!`,
    });
  } catch (error) {
    res.status(401).json({
      massage: "Account Create Not Success !",
    });
  }
};

// Login Function
exports.loging = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({
        massage: "Wrong Cradential !",
      });
    }
    const validate = await bcrypt.compare(password, user.password);

    if (!validate) {
      return res.status(400).json({
        massage: "Password Dosen't Match! ",
      });
    }
    const token = await jwt.sign(
      { username, _id: user._id },
      process.env.PRIVATE_KEY,
      { expiresIn: "2h" }
    );

    res.status(201).json({
      massage: "Login SuccessFully! 🫡",
      token
    });
  } catch (error) {
    console.log("Something Went Wrong !");
  }
};
