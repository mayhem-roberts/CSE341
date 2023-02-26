const express = require('express');
const mongoose = require('./database/connect');
const bodayParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8080;

app
    .use(bodayParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      })
    .use(express.json())
    .use("/", require("./routes"))
    // connect to mongoDB
    .listen(PORT, async () => {
      console.log(`Server is running on port ${PORT}.`);
      try {
        const db = await mongoose.getDB();
        console.log("Connected via Mongoose");
      } catch (error) {
          console.log(error)
      }
      });

// const db = require("./models");
// db.mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })  
//   .then(() => {
//     console.log('Connected to the database!');
//   })
//   .catch((err) => {
//     console.log('Cannot connect to the database!', err);
//     process.exit();
//   });


  