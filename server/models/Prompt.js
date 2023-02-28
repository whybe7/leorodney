const mongoose = require("mongoose");

const Prompt = new mongoose.Schema({
    author: { type: String, required: true },
    value: { type: String, required: true },
    img: { type: String, required: true } 
})

module.exports = mongoose.model("Prompt", Prompt)