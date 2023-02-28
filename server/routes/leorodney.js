/// OpenAI dalle API
const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

const leorodneyRoute = async (req, res) =>{
    res.header( "Access-Control-Allow-Origin" );
    try {
        const { prompt } = req.body;
        console.log("[AI GENERATION REQ]: ", prompt);
        const AiResponse = await openai.createImage({ prompt, n: 1, size: "1024x1024", response_format: "b64_json" })
        const img = AiResponse.data.data[0].b64_json;

        res.status(200).json({img});
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
}

module.exports = leorodneyRoute;