import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import booksRouter from "./src/features/books/book.routes.js";

const app = express();
app.use(express.json());
app.use("/api/books", booksRouter);

export default app;