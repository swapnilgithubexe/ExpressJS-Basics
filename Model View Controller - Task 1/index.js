import express from "express";
import path from "path";
import { getProducts } from "./src/controllers/product.controller.js";

const app = express();

app.get("/", getProducts);

export default app;
