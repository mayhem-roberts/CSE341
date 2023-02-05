const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;

const getBooks = async (req, res) => {
    const result = await mongodb.getDb().db("project02").collection('books').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getBook = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db("project02").collection('books').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const createBook = async (req, res) => {
    const book = {
        author: req.body.author,
        country: req.body.country,
        imageLink: req.body.imageLink,
        language: req.body.language,
        link: req.body.link,
        pages: req.body.pages,
        title: req.body.title,
        year: req.body.year
    };
    const response = await mongodb.getDb().db("project02").collection('books').insertOne(book);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the book.');
    }
  };

module.exports = { getBooks, getBook, createBook };