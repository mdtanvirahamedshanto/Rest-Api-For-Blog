const { singup, loging } = require("../../controllers/authController");

const authRoute = require("express").Router();

authRoute.post("/singup", singup);
authRoute.post("/login", loging);

module.exports = authRoute;
