/* ----------- CSE 341 server.js --------------  */

const express = require('express');
const app = express();
const dbConnection = require('./database/connect');

const port = process.env.PORT || 3000;

// database connection call to start
dbConnection();
app.use('/', require('./routes'))
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})