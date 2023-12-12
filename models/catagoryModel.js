const mongoose = require("mongoose");

const catagorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
},
  {
    timestamps: true,
  }
);

const catagoryModel = mongoose.model("Catagory", catagorySchema);

module.exports = catagoryModel;
