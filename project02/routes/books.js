const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books');

// get/read all books
router.get('/', booksController.getBooks);
// #swagger.summary = 'get all books from db'
// #swagger.description = 'get all books from db'

// get/read a book by id
router.get('/:id', booksController.getBook);
// #swagger.summary = 'get a book from db'
// #swagger.description = 'get a book from db'

// post/create a new book
router.post('/',
// #swagger.summary = 'add new book to db'
// #swagger.description = 'add new book to db'
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


module.exports = router;