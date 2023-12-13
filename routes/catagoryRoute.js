const {
  createCatagory,
  getAllCatagory,
} = require("../controllers/catagoryController");

const catagoryRoute = require("express").Router();

catagoryRoute.post("/catagory", createCatagory);
catagoryRoute.get("/catagory", getAllCatagory);

module.exports = catagoryRoute;
