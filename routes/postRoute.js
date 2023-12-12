const { createPost, getAllPost, updatePost, deletePost, getPost } = require("../controllers/postController");
const { authMiddleWare } = require("../middlewares/auth");

const postRoute = require("express").Router();

postRoute.post("/post", authMiddleWare, createPost);
postRoute.get("/posts", getAllPost);
postRoute.get("/post", getPost);
postRoute.put("/update:postId", authMiddleWare, updatePost);
postRoute.delete("/delete:postId", authMiddleWare, deletePost);

module.exports = postRoute;
