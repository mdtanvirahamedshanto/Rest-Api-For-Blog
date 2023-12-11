const { post } = require("../controllers/postController");
const { authMiddleWare } = require("../middlewares/auth");

const postRoute = require("express").Router();

postRoute.post("/post", post)

module.exports = postRoute;