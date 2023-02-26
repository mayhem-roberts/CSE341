// express
const express = require('express');
const app = express();

// routes
const mongoose = require('./database/connect');
const swaggerSpec = require('./swagger.json');

// swagger
const swaggerUI = require("swagger-ui-express");

// env
const dotenv = require('dotenv');
dotenv.config();

// oAuth
const { auth } = require('express-openid-connect');
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



  