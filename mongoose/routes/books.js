const routes = require('express').Router();
const booksController = require("../controllers/books");

routes.get("/", 
// #swagger.summary = 'get all books from db'
// #swagger.description = 'get all books from db'
booksController.getBooks);
routes.get("/:id", 
// #swagger.summary = 'get a book from db'
// #swagger.description = 'get a book from db'
booksController.getBook);
routes.post("/", 
// #swagger.summary = 'update book in db'
// #swagger.description = 'update book in db'
/* 
#swagger.responses[201] = {description: 'OK'}}}
*/
 /*
#swagger.parameters['obj'] = {
    in: 'body',
    description: 'Add a book',
    schema: { $ref: '#/definitions/books' }} 
 */
booksController.createBook);
routes.put("/:id", 
// #swagger.summary = 'update book in db by id '
// #swagger.description = 'update book in db by id'
/* 
#swagger.responses[204] = {description: 'OK'}}}
*/
 /*
#swagger.parameters['obj'] = {
    in: 'body',
    description: 'Add a book',
    schema: { $ref: '#/definitions/books' }} 
 */
booksController.updateBook);
routes.delete("/:id", 
// #swagger.summary = 'delete a book from db'
// #swagger.description = 'delete a book from db'
booksController.deleteBook);

module.exports = routes;