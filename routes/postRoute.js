const { createPost } = require("../controllers/postController");
const { authMiddleWare } = require("../middlewares/auth");

const postRoute = require("express").Router();

postRoute.post("/post", authMiddleWare, createPost)

module.exports = postRoute;