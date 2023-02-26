const routes = require('express').Router();
const booksController = require("../controllers/books");

routes.get("/", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        // #swagger.summary = 'get all books from db'
        // #swagger.description = 'get all books from db'
        booksController.getBooks(req, res)
    } else {
        res.status(401).send("not logged in")
    }
});

routes.get("/:id", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        // #swagger.summary = 'get a book from db'
        // #swagger.description = 'get a book from db'
        booksController.getBook(req, res)
    } else {
        res.status(401).send("not logged in")
    }
});

routes.post("/", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        // #swagger.summary = 'update book in db'
        // #swagger.description = 'update book in db'
        /* 
        #swagger.responses[201] = {description: 'OK'}}}
        */
        /*
        #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Add a book',
            schema: { $ref: '#/definitions/books' }} 
        */
        booksController.createBook(req, res)
    } else {
        res.status(401).send("not logged in")
    }
});

routes.put("/:id", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        // #swagger.summary = 'update book in db by id '
        // #swagger.description = 'update book in db by id'
        /* 
        #swagger.responses[204] = {description: 'OK'}}}
        */
        /*
        #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Add a book',
            schema: { $ref: '#/definitions/books' }} 
        */
        booksController.updateBook(req, res)
    } else {
        res.status(401).send("not logged in")
    }
});

routes.delete("/:id", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        // #swagger.summary = 'delete a book from db'
        // #swagger.description = 'delete a book from db'
        booksController.deleteBook(req, res)
    } else {
        res.status(401).send("not logged in")
    }
});

module.exports = routes;