const { default:mongoose} = require("mongoose");
const { create } = require("../models/authors.js");
const ObjectId = require("mongodb").ObjectId;

const Book = require("../models/books.js");

async function getBooks(req, res) {
    const result = await Book.find({});

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
}


module.exports = { getBooks}