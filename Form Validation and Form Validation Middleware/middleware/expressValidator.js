// Please don't change the pre-written code
// Import the necessary modules here
import { body, validationResult } from "express-validator";

export const formValidation = async (req, res, next) => {
  // Write your code here
  //Rules
  const rules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").notEmpty().withMessage("Enter a valid email"),
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Profile image is required")
      }
    })
  ]
  await Promise.all(rules.map(rule => rule.run(req)));

  const validationErrors = validationResult(req)

  if (!validationErrors.isEmpty()) {
    return res.render("upload-form", { user: req.user })
  }
  next();
};

export default formValidation;

