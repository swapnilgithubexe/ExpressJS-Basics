// -------------pre-written code starts---------------
import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'

// creating model from schema.
const booksModel = mongoose.model('Book', bookSchema);

export default class BookRepository {

    //book creation
    async createBook(bookData) {
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }

    // filtering of book by id
    async getOne(id) {
        const book = await booksModel.findById(id);
        return book;
    }

    // ------------prewritten code ends----------------


    // Complete the following functions:

    //filtering the books based on genre
    async listBooksByGenre(genre) {
        try {
            // console.log("Genre being queried:", genre);
            const booksByGenre = await booksModel.find({ genre: genre });
            return booksByGenre;
        } catch (error) {
            console.log(error);

        }
    }

    //increasing the count of available books
    async updateBookAvailability(bookId, quantity) {
        try {
            const book = await booksModel.findByIdAndUpdate(bookId, {
                $inc: {
                    availableCopies: quantity || 0
                }
            }, {
                new: true
            });
            if (!book) {
                throw new Error("Book not found")
            }
            return book;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //deletion of book
    async deleteBookById(bookId) {
        const deletedBook = await booksModel.findByIdAndRemove(bookId);
        return deletedBook;

    }
}