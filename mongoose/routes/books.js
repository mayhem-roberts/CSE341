const routes = require('express').Router();
const booksController = require("../controllers/books");

routes.get("/", booksController.getBooks);
routes.get("/:id", booksController.getBook);
routes.post("/", booksController.createBook);
routes.put("/:id", booksController.updateBook);
routes.delete("/:id", booksController.deleteBook);

module.exports = routes;