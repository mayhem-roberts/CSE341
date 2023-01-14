// connect to .env file
require("dotenv").config();
const { MongoClient } =  require('mongodb');

// db URI from .env file
const uri = process.env['MONGO_CLIENT'];
//console.log(uri);

const dbConnection = async() => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("db is connected.")
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

module.exports = dbConnection;