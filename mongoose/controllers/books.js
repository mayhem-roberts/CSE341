const ObjectId = require("mongodb").ObjectId;
const Book = require("../models/books.js");

// find and return all books
const getBooks = async (req, res) =>  {
    const result = await Book.find({});

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
}

// find and return a book by id
const getBook = async (req, res) => {
    const bookId = new ObjectId(req.params.id);
    try {
        const result = await Book.find({ _id: bookId });
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(result);
    } catch {
        res.setHeader("Content-Type", "text/plain");
        res.status(400).send('Book Not Found');
    }
};

// create a new book
const createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        try {
            await book.save();
            console.log(book);
        } catch (error) {
            res.setHeader("Content-Type", "text/plain");
            res.status(400).json(error);
            return;
        }
        res.setHeader("Content-Type", "application/json");
        res.status(201).json(book);
    } catch (error) {
        res.setHeader("Content-Type", "text/plain");
        res.status(500).send('Book Not Created');
    }
};

// update a book by id
const updateBook = async (req, res) => {
    try {
        const bookId = new ObjectId(req.params.id);
        try {
            const update = await Book.findByIdAndUpdate(
                { _id: bookId},
                req.body,
                {runValidators:true}
            );
            res.status(204).json(update);
            //console.log(update)
        } catch (error) {
            res.setHeader("Content-Type", "text/plain");
            res.status(400).json(error);
            return;
        }       
    } catch (error) {
        res.setHeader("Content-Type", "text/plain");
        res.status(500).send('Book Not Changed');
    }
};

// delete a book by id
const deleteBook = async (req, res) => {
    try {
        const bookId = new ObjectId(req.params.id);
        try {
            const remove = await Book.deleteOne({ _id: bookId });
            console.log(remove);
            res.status(200).json(remove);
        } catch (error) {
            res.setHeader("Content-Type", "text/plain");
            res.status(400).json(error);
            return;
        }
    } catch (error) {
        res.setHeader("Content-Type", "text/plain");
        res.status(500).send('Book Not Deleted'); 
    }
};

module.exports = { getBooks, getBook, createBook, updateBook, deleteBook }