// Please don't change the pre-written code
// Import the necessary modules here

import { fetchAllProducts } from "../../product/model/product.model.js";
import { getAllUsers } from "../../user/model/user.model.js";

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const get = (userId) => {
  return cartItems.filter((i) => i.userId == userId);
}

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  //not validating the userID, productID or quantity for now
  const cartItem = new cartModel(userId, productId, quantity);

  const user = getAllUsers().find((u) => u.id == userId);
  if (!user) {
    return "User not found"
  }

  const product = fetchAllProducts().find((p) => p.id == productId);
  if (!product) {
    return "Product not found"
  }

  cartItems.push(cartItem);
  return cartItem;
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here

  const cartItemIndex = cartItems.findIndex((i) => {
    return i.id == cartItemId && i.userId == userId
  });
  if (cartItemIndex >= 0) {
    let deletedItem = cartItems[cartItemIndex];
    cartItems.splice(cartItemIndex, 1);
    return {
      success: true,
      deletedCartItem: deletedItem
    }
  } else {
    return {
      success: false,
      msg: "operation not allowed"
    }
  }



};
