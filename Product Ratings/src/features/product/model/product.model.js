// Please don't change the pre-written code
// Import the necessary modules here

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

// export const rateProductModel = (productId, userId, rating) => {
//   // Write your code here
//   //user validation check
//   const user = getAllUsers().find((u) => u.id == userId);
//   if (!user) {
//     return { status: false, res: "User not found" };
//   }

//   //product validation check
//   const product = products.find((p) => p.id == productId);
//   if (!product) {
//     return { status: false, res: "Product not found" };
//   }

//   //check if rating array is present
//   if (!product.ratings) {
//     product.ratings = [];
//     // product.ratings.push({
//     //   rating: rating,
//     //   userId: userId
//     // })
//   } else {
//     const existingRatingindex = product.ratings.findIndex((r) => r.id == userId);
//     if (existingRatingindex >= 0) {
//       product.ratings[existingRatingindex] = { userId, rating };
//     } else {
//       product.ratings.push({
//         rating: rating,
//         userId: userId
//       })
//     }
//     return { status: true, res: product }
//   }
//   //check if the user has given the ratings or not
// };
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
