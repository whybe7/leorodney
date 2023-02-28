const mongoose = require("mongoose");

const mongoConnect = uri =>{
    mongoose.set("strictQuery", true);
    mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        dbName: 'leorodney',
    })
    .then(()=> console.info("=> Conncted to mongoDB succesfully. at DBnode[leorodney]"))
    .catch(console.error);
}

module.exports = { mongoConnect };