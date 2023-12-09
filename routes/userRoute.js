const { GetAllUser } = require("../controllers/userController");
const { authMiddleWare } = require("../middlewares/auth");

const userRoute = require("express").Router();

userRoute.get("/get", authMiddleWare, GetAllUser);

module.exports = userRoute;
