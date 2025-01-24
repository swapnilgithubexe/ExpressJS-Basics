//-----------pre-written code starts----------
import BookRepository from "./book.repository.js";

export default class BookController {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  //book creation
  createBook = async (req, res) => {
    const { title, author, genre, copies, availableCopies } = req.body;
    try {
      const bookData = {
        title,
        author,
        genre,
        copies,
        availableCopies,
      };
      await this.bookRepository.createBook(bookData);
      res.status(201).json(bookData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to create a new book" });
    }
  };

  //filtering the book by id
  getOne = async (req, res) => {
    const { bookId } = req.params;
    console.log(bookId);

    try {
      const book = await this.bookRepository.getOne(bookId);
      if (!book) {
        res.status(404).send("book  not found.");
      } else {
        res.status(200).send(book);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to find book" });
    }
  };

  //---------------pre-written code ends-----------------

  // Complete the functions below:

  //filtering the books based on genre
  listBooksByGenre = async (req, res) => {
    try {
      const { genre } = req.params;
      if (!genre) {
        return res.status(400).send("Invalid genre")
      }
      const result = await this.bookRepository.listBooksByGenre(genre);
      if (!result) {
        return res.status(404).send("book not found")
      }
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error")
    }
  };

  //increasing the count of available books
  updateBookAvailability = async (req, res) => {
    try {
      const { bookId } = req.params;
      const { quantity } = req.body;
      const result = await this.bookRepository.updateBookAvailability(bookId, quantity);
      if (!result) {
        res.status(400).send("book not found")
      }
      res.status(200).send(result)
    } catch (error) {
      res.status(500).send(error);

    }
  };

  //deletion of book
  deleteBook = async (req, res) => {
    try {
      const { bookId } = req.params;
      const result = await this.bookRepository.deleteBookById(bookId);
      if (!result) {
        res.status(404).send("Book not found")
      }
      res.status(200).send(result)
    } catch (error) {
      console.log(error);
      res.status(500).send(error);

    }
  };
}
