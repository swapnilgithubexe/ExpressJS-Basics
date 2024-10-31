import express from "express";
import {
  addProduct,
  getAllProducts,
  getOneProduct,
  rateProduct,
} from "../controller/product.controller.js";
import jwtAuth from "../../../middlewares/jwtAuth.js";

const router = express.Router();

// get routes
// router.route("/").get(authorizer, getAllProducts);
router.route("/").get(jwtAuth, getAllProducts);
router.route("/:id").get(getOneProduct);

// post routes
router.route("/").post(addProduct);
router.route("/rateproduct").get(rateProduct);

export default router;
