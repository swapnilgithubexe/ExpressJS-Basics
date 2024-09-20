// Please don't change the pre-written code
// Import the necessary modules here
import { registerUser, authenticateUser } from "../models/user.model.js";


export default class UserController {
  getRegister = (req, res, next) => {
    // Write your code here
    res.render("user-register");
  };
  getLogin = (req, res, next) => {
    // Write your code here
    res.render("user-login");
  };
  addUser = (req, res) => {
    // Write your code here
    const { name, email, password } = req.body;
    registerUser({ name, email, password });
    res.render("user-login");

  };
  loginUser = (req, res) => {
    // Write your code here
    const { email, password } = req.body;
    const user = authenticateUser({ email, password });

    if (!user) {
      return res.send({ success: false, message: "login failed" });
    }
    return res.send({ success: true, message: "login successful" })

  };

}
