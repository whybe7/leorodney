const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { mongoConnect } = require("./modules/connect");
const leorodneyRoute = require("./routes/leorodney");
const promptRoute = require("./routes/prompt");
const communityRoute = require("./routes/community");

// pulling envirement variabels from .env file
dotenv.config();
const server = express();

const PORT = process.env.PORT || 9000;

// Mid--Wares
server.use(cors());
server.use(express.json({limit: "20mb"}));

server.listen(PORT, ()=>console.info(`=> Server is live in: http://localhost:${PORT}`))
mongoConnect(process.env.MONGODB_URL);

// Routes
server.get("/community", communityRoute);
server.post("/prompt", promptRoute);
server.post("/leorodney", leorodneyRoute);