const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Books API',
    description: 'Get, Post, Put and Delete to mongodb Projects02 books collection',
  },
  host: 'mayhem-roberts-341-project02.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);