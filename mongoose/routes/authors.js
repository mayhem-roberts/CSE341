const routes = require('express').Router();
const authorsController = require("../controllers/authors");

routes.get("/", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        // #swagger.summary = 'get all authors from db'
        // #swagger.description = 'get all authors from db'
        authorsController.getAuthors(req, res)
    } else {
        res.status(401).send("not logged in")
    }
});

routes.get("/:id", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        // #swagger.summary = 'get an author from db'
        // #swagger.description = 'get an author from db'
        authorsController.getAuthor(req, res)
    } else {
        res.status(401).send("not logged in")
    }
});

routes.post("/", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        // #swagger.summary = 'add an author in db'
        // #swagger.description = 'add an author in db'
        /* 
        #swagger.responses[201] = {description: 'OK'}}}
        */
        /*
        #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Add an author',
            schema: { $ref: '#/definitions/authors' }} 
        */
        authorsController.createAuthor(req, res)
    } else {
        res.status(401).send("not logged in")
    }
});

routes.put("/:id", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        // #swagger.summary = 'update an author in db by id '
        // #swagger.description = 'update an author in db by id'
        /* 
        #swagger.responses[204] = {description: 'OK'}}}
        */
        /*
        #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Update an author',
            schema: { $ref: '#/definitions/authors' }} 
        */
        authorsController.updateAuthor(req, res)
    } else {
        res.status(401).send("not logged in")
    }
});

routes.delete("/:id", (req, res) => {
    if (req.oidc.isAuthenticated()) {
        // #swagger.summary = 'delete an author from db'
        // #swagger.description = 'delete an author from db'
        authorsController.deleteAuthor(req, res)
    } else {
        res.status(401).send("not logged in")
    }
});

module.exports = routes;