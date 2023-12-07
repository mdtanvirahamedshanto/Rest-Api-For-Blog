const User = require("../models/userModel");

exports.singup = async (req, res) => {
  const { name, username, email, password, profile } = req.body;
  try {
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

exports.loging = async (req, res) => {
  res.send("controller login");
};
