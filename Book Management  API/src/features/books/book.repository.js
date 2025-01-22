import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'

const Book = mongoose.model("Book", bookSchema);

export default class BookRepository {


    // -----Change code in below functions only-----

    //book creation
    async createBook(bookData) {
        try {
            const newBook = new Book(bookData);
            await newBook.save();

            return newBook;
        } catch (error) {
            return "Something went wrong!"
        }
    }

    //filtering the book by id
    async getOne(id) {
        try {
            const book = await Book.findOne({ _id: id });
            return book
        } catch (error) {
            console.log(error);

        }
    }
}