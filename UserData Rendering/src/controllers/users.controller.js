// Please don't change the pre-written code
// Import the necessary modules here
import { userModel } from "../models/users.model.js";

export const userController = async (req, res) => {
  try {
    const users = await userModel();
    res.render("index", { users: users })
  } catch (error) {
    console.log(error);

  }
};
