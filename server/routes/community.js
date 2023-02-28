const Prompt = require("../models/Prompt");

const communityRoute = async (req, res) =>{
    res.header( "Access-Control-Allow-Origin" );
    try {
        const communityShowCases = await Prompt.find({});
        res.status(200).json(communityShowCases);
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
}

module.exports = communityRoute;