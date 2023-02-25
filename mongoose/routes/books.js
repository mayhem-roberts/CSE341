const routes = require('express').Router();
const books = require("../controllers/books");

routes.get("/", books.getBooks);


module.exports = routes;