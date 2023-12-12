const Post = require("../models/postModel");

//    Create Post...

exports.createPost = async (req, res) => {
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

//    Get All Post

exports.getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      posts,
    });
  } catch (error) {
    res.status(401).json({
      massage: "Something went wrong! ",
    });
  }
};
