const routes = require('express').Router();
const authorsController = require("../controllers/authors");

routes.get("/", authorsController.getAuthors);
routes.get("/:id", authorsController.getAuthor);
routes.post("/", authorsController.createAuthor);
routes.put("/:id", authorsController.updateAuthor);
routes.delete("/:id", authorsController.deleteAuthor);

module.exports = routes;