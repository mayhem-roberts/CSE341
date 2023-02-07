const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Books API',
    description: 'Get, Post, Put and Delete to mongodb Projects02 books collection',
  },
  host: '',
  schemes: [],
  definitions: {
   books: {
    author: "Dante Alighieri",
    country: "Italy",
    imageLink: "images/the-divine-comedy.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315
  }
}
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);