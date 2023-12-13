const Catagory = require("../models/catagoryModel");

//    Create Catagory...

exports.createCatagory = async (req, res) => {
  const { name } = req.body;
  try {
    const catagory = await Catagory.create({
      name,
    });
    res.status(201).json({
      massage: "Catagory Create Successfully! ",
      catagory,
    });
  } catch (error) {
    res.status(401).json({
      massage: "Something went wrong! ",
    });
  }
};

//    get all catagory

exports.getAllCatagory = async (req, res) => {
  try {
    const catagory = await Catagory.find();
    res.status(200).json(catagory);
  } catch (error) {
    res.status(401).json({
      massage: "Something went wrong! ",
    });
  }
};
