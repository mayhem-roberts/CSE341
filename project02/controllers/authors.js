const mongodb = require('../database/connect');
const ObjectId = require('mongodb').ObjectId;
const Validator = require('validatorjs');

const authorRules = {
    author: 'required',
    birthday: 'required',
    country: 'required',
    bookCount: 'required'
}

const getAuthors = async (req, res) => {
    const result = await mongodb.getDb().db("project02").collection('authors').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getAuthor = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db("project02").collection('authors').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const createAuthor = async (req, res) => {
    const author = req.body;
    let validation = new Validator(author, authorRules)
    if (validation.passes()) {
        const response = await mongodb.getDb().db("project02").collection('authors').insertOne(author);
        if (response.acknowledged) {
            res.status(201).json(response);
        } else {
            res.status(500).json(response.error || 'Some error occurred while creating the author.');
        }
    } 
};

const updateAuthor = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const author = req.body;
    let validation = new Validator(author, authorRules)
    const response = await mongodb.getDb().db("project02").collection('authors').replaceOne({ _id: userId }, author);
    //console.log(response);
    if (validation.passes()) {
        if (response.modifiedCount > 0) {
            res.status(204).send();
          } else {
            res.status(500).json(response.error || 'Some error occurred while updating the author.');
          }
    }     
};

const deleteAuthor = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db("project02").collection('authors').deleteMany({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the author.');
    }
};

module.exports = { getAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor };