const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.authMiddleWare = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        massage: "Access Not Allow",
      });
    }
    const sToken = token.split(" ")[1];
    const decode = jwt.verify(sToken, process.env.PRIVATE_KEY);
    const id = decode.id;
    const user = await User.findById(id);
    req.user = user;

    next();
  } catch (error) {
    res.status(400).json({
      massage: "Authencation Failed! ",
    });
  }
};
