const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        unique:true,
        required: true,
    },
    discription:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        trim: true,
        required: false,
        default:"admin",
    },
    catagory:{
        type: Array,
        required: false,

    },
    photo:{
        type: String,
        required: false,
    },
},{timestamps: true});


const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;