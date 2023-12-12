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
  const { username, catagory } = req.query;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catagory) {
      posts = await Post.find({
        catagory: {
          $in: [catagory],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json({
      posts,
    });
  } catch (error) {
    res.status(401).json({
      massage: "Something went wrong! ",
    });
  }
};

//     Update post

exports.updatePost = async (req, res) => {
  const postId = req.headers.params;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status("Not Find post");
    }
    const updatepost = await Post.findByIdAndUpdate(postId, req.body, {
      new: true,
    });
    res.status(200).json({
      massage: "Update your post successfully! ",
      updatepost,
    });
  } catch (error) {
    res.status(401).json({
      massage: "You can update only your post ",
    });
  }
};

//    Delete post

exports.deletePost = async (req, res) => {
  const postId = req.headers.params;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status("Not Find post");
    }
    await Post.findByIdAndDelete(postId);
    res.status(200).json({
      massage: "Delete your post successfully! ",
    });
  } catch (error) {
    res.status(401).json({
      massage: "You can delete only your post ",
    });
  }
};

//    get single post

exports.getPost = async (req, res) => {
  const postId = req.headers.params;
  try {
    const post = await Post.findById(postId);
    res.status(200).json({
      post,
    });
  } catch (error) {
    res.status(401).json({
      massage: "Something went wrong! ",
    });
  }
};
