const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Please enter your Name",
    },
    contact: {
        type: String,
        trim: true,
    },
    message: {
        type: String,
        trim: true,
    }
})