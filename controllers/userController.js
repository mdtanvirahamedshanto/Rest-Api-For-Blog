const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

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

// Update User...
exports.UpdateUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        massage: "Wrong user! ",
      });
    }
    req.body.password = jwt.hash(req.body.password, 10);
    //update user...
    const updateuser = await User.findOneAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(201).json({
      massage: "Update User Profile Succesfully! ",
      updateuser,
    });
  } catch (error) {
    res.status(401).json({
      massage: "You can update only your account! ",
    });
  }
};

// Delete User...
exports.DeleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        massage: "Wrong user! ",  
      });
    }
    //delete user...
    const deleteuser = await User.findByIdAndDelete(userId);
    res.status(201).json({
      massage: "User Delete Succesfully! ",
    });
  } catch (error) {
    res.status(401).json({
      massage: "You can delete only your account! ",
    });
  }
};
