import express from "express";
import {
  addProduct,
  getAllProducts,
  getOneProduct,
  rateProduct,
} from "../controller/product.controller.js";

const router = express.Router();

// get routes
router.route("/").get(getAllProducts);
router.route("/:id").get(getOneProduct);

// post routes
router.route("/").post(addProduct);
router.route("/rateproduct").get(rateProduct);

export default router;
