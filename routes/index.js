const routes = require('express').Router();
const  fun= require('../controllers/');

routes.get('/', fun.myName);
routes.get('/test', fun.familyName);

module.exports = routes;