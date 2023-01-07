const routes = require('express').Router();
const con = require('../controllers/');

routes.get('/', con.displayName);

module.exports = routes;