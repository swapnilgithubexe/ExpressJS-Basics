import express from 'express'
import ProductController from './src/controllers/product.controller.js';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';

const server = express();

// setup view engine settings
server.set("view engine", "ejs");
// path of our views
server.set("views", path.join(path.resolve(),"src",'views')); 

server.use(ejsLayouts);

// create an instance of ProductController
const productController = new ProductController(); 
server.get('/', (productController.getProducts));

server.use(express.static('src/views'));

server.listen(3400);
console.log('Server is listening on port 3400');