const express = require('express');
const bodayParser = require('body-parser');
const mongodb = require('./database/connect');

const port = process.env.PORT || 8080;
const app = express();

app
    .use(bodayParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      })
    .use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});