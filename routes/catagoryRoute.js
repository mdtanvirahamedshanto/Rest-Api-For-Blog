const { createCatagory } = require("../controllers/catagoryController");

const catagoryRoute = require("express").Router();

catagoryRoute.post("/catagory", createCatagory);

module.exports = catagoryRoute;