import express from "express";
const router = express.Router();
import BookController from "./book.controller.js";

const booksController = new BookController();

// Create a New Book
router.post("/", (req, res) => {
  booksController.createBook(req, res);
});

// Get Book Details by ID
router.get("/:bookId", (req, res) => {
  booksController.getOne(req, res);
});

// Update Book Availability
router.put("/:bookId", (req, res) => {
  booksController.updateBookAvailability(req, res);
});

// Delete Book by ID
router.delete("/:bookId", (req, res) => {
  booksController.deleteBook(req, res);
});

// List Books by Genre
router.get("/genre/:genre", (req, res) => {
  booksController.listBooksByGenre(req, res);
});

export default router;
