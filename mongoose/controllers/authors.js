const ObjectId = require("mongodb").ObjectId;
const Author = require("../models/authors.js");

// find and return all authors
const getAuthors = async (req, res) => {
    const result = await Author.find({});

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
};

// find and return an author by id
const getAuthor = async (req, res) => {
    const authorId = new ObjectId(req.params.id);
    //console.log(authorId); //new ObjectId("63e8535befc8eb416b74a2c1")
    try {
        const result = await Author.find({ _id: authorId });
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(result);
    } catch {
        res.setHeader("Content-Type", "text/plain");
        res.status(400).send('Author Not Found');
    }
};

// create a new author
const createAuthor = async (req, res, next) => {
    try {
        const author = new Author(req.body);
        try {
            await author.save();
            console.log(author);
        } catch (error) {
            res.setHeader("Content-Type", "text/plain");
            res.status(400).json(error);
            return;
        }
        res.setHeader("Content-Type", "application/json");
        res.status(201).json(author);
    } catch (error) {
        res.setHeader("Content-Type", "text/plain");
        res.status(500).send('Author Not Created');
    }
};

// update an author by id
const updateAuthor = async (req, res) => {
    try {
        const authorId = new ObjectId(req.params.id);
        try {
            const update = await Author.findByIdAndUpdate(
                { _id: authorId},
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
        res.status(500).send('Author Not Changed');
    }
};

// delete an author by id
const deleteAuthor = async (req, res) => {
    try {
        const authorId = new ObjectId(req.params.id);
        try {
            const remove = await Author.deleteOne({ _id: authorId });
            console.log(remove);
            res.status(200).json(remove);
        } catch (error) {
            res.setHeader("Content-Type", "text/plain");
            res.status(400).json(error);
            return;
        }
    } catch (error) {
        res.setHeader("Content-Type", "text/plain");
        res.status(500).send('Authour Not Deleted'); 
    }
};

module.exports = { getAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor }


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