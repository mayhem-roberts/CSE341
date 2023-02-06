const express = require('express');
const mongodb = require('./database/connect');
const bodayParser = require('body-parser');

const port = process.env.PORT || 8080;
const app = express();

app
    .use(bodayParser.json())
    .use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});