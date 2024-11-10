import express from "express";
import {
  addToCartController,
  removeFromCartController,
} from "../controller/cart.controller.js";
import jwtAuth from "../../../middlewares/jwtAuth.js";
const router = express.Router();

router.route("/").post(jwtAuth, addToCartController);
router.route("/:itemId").delete(jwtAuth, removeFromCartController);

export default router;
