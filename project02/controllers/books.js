const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;
const Validator = require('validatorjs');

const bookRules = {
    author: 'required',
    country: 'required',
    imageLink: 'required',
    language: 'required',
    link: 'required',
    pages: 'required',
    title: 'required',
    year: 'required'
}

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
    const book = req.body;
    let validation = new Validator(book, bookRules)
    if (validation.passes()) {
        const response = await mongodb.getDb().db("project02").collection('books').insertOne(book);
        if (response.acknowledged) {
            res.status(201).json(response);
        } else {
            res.status(500).json(response.error || 'Some error occurred while creating the book.');
        }
    } 
};

const updateBook = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const book = req.body;
    let validation = new Validator(book, bookRules)
    const response = await mongodb.getDb().db("project02").collection('books').replaceOne({ _id: userId }, book);
    //console.log(response);
    if (validation.passes()) {
        if (response.modifiedCount > 0) {
            res.status(204).send();
          } else {
            res.status(500).json(response.error || 'Some error occurred while updating the book.');
          }
    }     
};

const deleteBook = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db("project02").collection('books').deleteMany({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the book.');
    }
};

module.exports = { getBooks, getBook, createBook, updateBook, deleteBook };