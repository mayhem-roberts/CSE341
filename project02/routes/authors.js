const express = require('express');
const router = express.Router();

const authorsController = require('../controllers/authors');

// get/read all authors
router.get('/', 
// #swagger.summary = 'get all authors from db'
// #swagger.description = 'get all authors from db'
authorsController.getAuthors);

// get/read a book by id
router.get('/:id', 
// #swagger.summary = 'get an author from db'
// #swagger.description = 'get an author from db'
authorsController.getAuthor);

// post/create a new author
router.post('/',
// #swagger.summary = 'add an author in db'
// #swagger.description = 'add an author in db'
/* 
swagger.responses[201] = {description: 'OK'}}}
*/
 /*
swagger.parameters['obj'] = {
    in: 'body',
    description: 'Add an author',
    schema: { $ref: '#/definitions/authors' }} 
 */
authorsController.createAuthor);

// post/create a new author
router.put('/:id',
// #swagger.summary = 'update an author in db by id '
// #swagger.description = 'update an author in db by id'
/* 
swagger.responses[204] = {description: 'OK'}}}
*/
 /*
swagger.parameters['obj'] = {
    in: 'body',
    description: 'Update an author',
    schema: { $ref: '#/definitions/authors' }} 
 */
authorsController.updateAuthor);

// delete an author by id
router.delete('/:id', 
// #swagger.summary = 'delete an author from db'
// #swagger.description = 'delete an author from db'
authorsController.deleteAuthor);

module.exports = router;