import express from "express";
import path from "path";
import { registerUser, renderUploadForm } from "./user.controller.js";
import imageUpload from "./middleware/fileUploadMiddleware.js";
import { formValidation } from "./middleware/expressValidator.js";

const app = express();

app.use(express.static(path.resolve("public")));

app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", renderUploadForm);
app.post("/", imageUpload.single("image"), formValidation, registerUser);

export default app;
