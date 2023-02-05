const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books');

// get/read all books
router.get('/', booksController.getBooks);

// get/read a book by id
router.get('/:id', booksController.getBook);

// post/create a new book
router.post('/', booksController.createBook);


module.exports = router;