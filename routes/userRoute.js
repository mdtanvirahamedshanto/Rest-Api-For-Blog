const { GetAllUser, UpdateUser } = require("../controllers/userController");
const { authMiddleWare } = require("../middlewares/auth");

const userRoute = require("express").Router();

userRoute.get("/get", authMiddleWare, GetAllUser);
userRoute.put("/update:userId", authMiddleWare, UpdateUser);

module.exports = userRoute;
