const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books');

// get/read all books
router.get('/', 
// #swagger.summary = 'get all books from db'
// #swagger.description = 'get all books from db'
booksController.getBooks);

// get/read a book by id
router.get('/:id', 
// #swagger.summary = 'get a book from db'
// #swagger.description = 'get a book from db'
booksController.getBook);

// post/create a new book
router.post('/',
// #swagger.summary = 'update book in db'
// #swagger.description = 'update book in db'
/* 
swagger.responses[201] = {description: 'OK'}}}
*/
 /*
swagger.parameters['obj'] = {
    in: 'body',
    description: 'Add a book',
    schema: { $ref: '#/definitions/books' }} 
 */
booksController.createBook);

// post/create a new book
router.put('/:id',
// #swagger.summary = 'update book in db by id '
// #swagger.description = 'update book in db by id'
/* 
swagger.responses[204] = {description: 'OK'}}}
*/
 /*
swagger.parameters['obj'] = {
    in: 'body',
    description: 'Add a book',
    schema: { $ref: '#/definitions/books' }} 
 */
booksController.updateBook);

// gdelete a book by id
router.delete('/:id', 
// #swagger.summary = 'delete a book from db'
// #swagger.description = 'delete a book from db'
booksController.deleteBook);


module.exports = router;