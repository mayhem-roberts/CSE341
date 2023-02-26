// express
const express = require('express');
const app = express();
const swaggerUI = require("swagger-ui-express");
const mongoose = require('./database/connect');
const { auth } = require('express-openid-connect');
const swaggerSpec = require('./swagger.json');

// env
const dotenv = require('dotenv');
dotenv.config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

const PORT = process.env.PORT || 8080;

app
    .use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
    .use(express.json())
    // auth router attaches /login, /logout, and /callback routes to the baseURL
    .use(auth(config))
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


  