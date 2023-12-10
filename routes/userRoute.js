const { GetAllUser, UpdateUser, DeleteUser } = require("../controllers/userController");
const { authMiddleWare } = require("../middlewares/auth");

const userRoute = require("express").Router();

userRoute.get("/get", authMiddleWare, GetAllUser);
userRoute.put("/update/:userId", authMiddleWare, UpdateUser);
userRoute.delete("/delete/:userId", authMiddleWare, DeleteUser);

module.exports = userRoute;
