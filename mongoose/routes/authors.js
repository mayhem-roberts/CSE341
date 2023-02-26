const routes = require('express').Router();
const authorsController = require("../controllers/authors");

routes.get("/", 
// #swagger.summary = 'get all authors from db'
// #swagger.description = 'get all authors from db'
authorsController.getAuthors);

routes.get("/:id", 
// #swagger.summary = 'get an author from db'
// #swagger.description = 'get an author from db'
authorsController.getAuthor);

routes.post("/", 
// #swagger.summary = 'add an author in db'
// #swagger.description = 'add an author in db'
/* 
#swagger.responses[201] = {description: 'OK'}}}
*/
 /*
#swagger.parameters['obj'] = {
    in: 'body',
    description: 'Add an author',
    schema: { $ref: '#/definitions/authors' }} 
 */
authorsController.createAuthor);

routes.put("/:id", 
// #swagger.summary = 'update an author in db by id '
// #swagger.description = 'update an author in db by id'
/* 
#swagger.responses[204] = {description: 'OK'}}}
*/
 /*
#swagger.parameters['obj'] = {
    in: 'body',
    description: 'Update an author',
    schema: { $ref: '#/definitions/authors' }} 
 */
authorsController.updateAuthor);

routes.delete("/:id", 
// #swagger.summary = 'delete an author from db'
// #swagger.description = 'delete an author from db'
authorsController.deleteAuthor);

module.exports = routes;