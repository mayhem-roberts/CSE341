const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

let db = null;
const URI = process.env.MONGO_URI;

async function getDB() {
    if (db == null) {
        try {
            db = await mongoose.connect(URI);
            let dbConnect = mongoose.connection;
            dbConnect.once("open", () => console.log("CONNECTED to DB!"));
            dbConnect.on("error", console.error.bind(console, "MongoDB connection error"));
        }
        catch (error) {
            console.log(error);
        }
    }
    return db
}

module.exports = {getDB}