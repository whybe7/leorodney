const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const Prompt = require("../models/Prompt");

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const promptRoute = async (req, res) =>{
    res.header( "Access-Control-Allow-Origin" );
    const {author, value, img} = req.body;

    try {
        // uploading the img to cloudinary firt then get an optimased img url
        const imgURL = await cloudinary.uploader.upload(img, { folder: "leorodeny" });       
        // storing the prompt through mongodb
        const newPrompt = await Prompt.create({ author, value, img: imgURL.secure_url });
        res.status(201).json(newPrompt)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
}

module.exports = promptRoute;