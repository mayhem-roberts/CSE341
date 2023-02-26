const express = require('express');
const routes = express.Router();

routes.use('/books', require('./books'));
routes.use('/authors', require('./authors'));
module.exports = routes;