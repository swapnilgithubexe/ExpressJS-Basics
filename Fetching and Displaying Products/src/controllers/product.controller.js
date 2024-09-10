// Import the necessary modules here
import ProductModel from "../models/product.model.js";

export default class ProductController {
  constructor() {
    this.ProductModel = new ProductModel();
  }
  getProducts = (req, res) => {
    //  Write your code here
    const products = this.ProductModel.fetchProducts();
    res.json(products);


  };
}
