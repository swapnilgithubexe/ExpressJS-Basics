import { getAllUsers } from "../../user/model/user.model.js";

let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "oneplus", price: 50000 },
  { id: 3, name: "samsung", price: 60000 },
];

export const fetchAllProducts = () => {
  return products;
};

export const rateProductModel = (productId, userId, rating) => {
  const user = getAllUsers().find((user) => {
    return user.id == userId;
  });
  if (!user) {
    return { status: false, res: "user not found" };
  }
  const product = products.find((product) => {
    return product.id == productId;
  });
  if (!product) {
    return { status: false, res: "product not found" };
  }

  if (!product.ratings) {
    product.ratings = [];
    product.ratings.push({ userId, rating });
  } else {
    const existingRating = product.ratings.findIndex((rating) => {
      return rating.userId == userId;
    });
    console.log("existing rating", existingRating);
    if (existingRating >= 0)
      product.ratings[existingRating] = { userId, rating };
    else product.ratings.push({ userId, rating });
  }
  return { status: true, res: product };
};
