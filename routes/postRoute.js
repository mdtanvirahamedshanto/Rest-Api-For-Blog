const { createPost, getAllPost } = require("../controllers/postController");
const { authMiddleWare } = require("../middlewares/auth");

const postRoute = require("express").Router();

postRoute.post("/post", authMiddleWare, createPost);
postRoute.get("/posts", authMiddleWare, getAllPost);

module.exports = postRoute;
