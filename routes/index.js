const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Meagan Roberts')
});
routes.get('/test', (req, res) => {
    res.send('Emily DeCato')
}); 

module.exports = routes;