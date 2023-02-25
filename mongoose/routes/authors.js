const routes = require('express').Router();
const authors = require("../controllers/authors");

routes.get("/", authors.getAuthors);

module.exports = routes;