import express from 'express';
const router = express.Router();
import BookController from './book.controller.js'


const booksController = new BookController();

// Create a New Book
router.post('/', (req, res) => {
    booksController.createBook(req, res);
});

// Get Book Details by ID
router.get('/:bookId', (req, res) => {
    booksController.getOne(req, res);
});


export default router;
