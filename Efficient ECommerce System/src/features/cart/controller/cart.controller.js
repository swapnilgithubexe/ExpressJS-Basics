// Please don't change the pre-written code
// Import the necessary modules here

import { addToCart, get, removeFromCart } from "../model/cart.model.js";

export const addToCartController = (req, res) => {
  // Write your code here
  const { productId, quantity } = req.query;

  const userId = req.userId;

  const cartItems = addToCart(userId, productId, quantity);
  res.status(200).json({
    "success": true,
    "item": cartItems
  })

};

export const removeFromCartController = (req, res) => {
  // Write your code here
  const userId = req.userId;
  const cartItemId = req.params.id;
  // const cartItem = get(userId);
  // if (!cartItem) {
  //   return res.status(400).json({
  //     "success": false,
  //     "msg": "operation not allowed"
  //   });
  // }
  const result = removeFromCart(userId, cartItemId);

  if (!result) {
    return res.status(400).json({
      "success": false,
      "msg": "operation not allowed"
    });
  } else {
    return res.status(200).json({
      "success": true,
      "deletedCartItem": result[0]
    })
  }
};
