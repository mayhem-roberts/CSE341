const { default:mongoose} = require("mongoose");
const { create } = require("../models/authors.js");
const ObjectId = require("mongodb").ObjectId;

const Author = require("../models/authors.js");

async function getAuthors(req, res) {
    const result = await Author.find({});

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
}


module.exports = { getAuthors}


// exports.findAll = (req, res) => {
// Author.find(
//     {},
//     {
//         author_id: 1,
//         author: 1,
//         birthday: 1,
//         country: 1,
//         bookCount: 1
//     }
// )
// .then((data) => {
//     res.send(data);
//     })
//     .catch((err) => {
//     res.status(500).send({
//         message:
//         err.message || 'Some error occurred while retrieving authors.',
//     });
//     });    
// }