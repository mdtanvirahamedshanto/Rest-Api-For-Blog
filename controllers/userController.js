const User = require("../models/userModel");
// Get User...
exports.GetAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(401).json({
      massage: "Something Went Wrong! ",
    });
  }
};
