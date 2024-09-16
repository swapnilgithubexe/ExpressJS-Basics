import express from "express";
import { renderUpdateForm, updateUser } from "./user.controller.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", renderUpdateForm);
app.post("/", updateUser);

export default app;
