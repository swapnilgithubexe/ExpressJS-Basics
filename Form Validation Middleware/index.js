import express from "express";
import { newUser } from "./user.controller.js";
import { formValidationMiddleware } from "./middleware.js";

// Please don't change the pre-written code
// Import the necessary modules here

const app = express();
app.use(express.json());

//  Modify 'app.post("/new", newUser);' route handler to use the 'formValidationMiddleware'.
app.post("/new", formValidationMiddleware, newUser);

export default app;
