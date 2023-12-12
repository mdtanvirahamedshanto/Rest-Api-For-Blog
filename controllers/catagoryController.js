const Catagory = require("../models/catagoryModel");

//    Create Post...

exports.createCatagory = async (req, res) => {
  const { title, discription, username, catagory, photo } = req.body;
  try {
    const post = await Post.create({
      title,
      discription,
      username,
      catagory,
      photo,
    });
    res.status(201).json({
      massage: "Post Upload Successfully! ",
      post,
    });
  } catch (error) {
    res.status(401).json({
      massage: "Something went wrong! ",
    });
  }
};
