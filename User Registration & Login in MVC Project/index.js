// Please don't change the pre-written code
// Import the necessary modules here
import UserController from "./src/controllers/user.controller.js";

import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();
const userController = new UserController();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

//create routes here
// app.get("/", userController.home)
app.get("/register", userController.getRegister)
app.post("/register", userController.addUser)

app.get("/login", userController.getLogin);
app.post("/login", userController.loginUser)

export default app;
