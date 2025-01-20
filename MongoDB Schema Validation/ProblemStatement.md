### Title:

MongoDB Schema Validation with Mongoose

## Introduction + Scenario:

You have been assigned the responsibility of implementing MongoDB schema validation using Mongoose, a popular Node.js library for MongoDB. In the context of building a library management system, your objective is to define the schema for books in the database and establish a successful connection to MongoDB.

## Objectives:

1. Implement the 'connectUsingMongoose' function inside 'src/config/mongooseConfig.js' to establish a MongoDB connection using 'Mongoose' to a local database at 'mongodb://localhost:27017'.

2. Create a book schema named 'bookSchema' inside 'src/features/books/book.schema.js' using Mongoose. This schema should include the following fields:

   - title: This field will store book titles as a string and is mandatory.
   - author: This field will store the author's information as an ObjectID reference to another collection named 'Author' and is mandatory.
   - genre: This field must store the book's genre as a string and is mandatory. It can only have one of the following values: 'Fiction,' 'Non-Fiction,' 'Science Fiction,' 'Mystery,' 'Fantasy,' or 'Other'.
   - copies: This field will store the total number of copies available for the book and is mandatory. It should have a minimum value of 1.
   - availableCopies: This field will store the number of available copies for the book and is mandatory. It should have a minimum value of 0.

## Expected Output:

1. Ensure that your Mongoose schema (bookSchema) is correctly defined based on the provided configuration object.

2. Your application should successfully connect to MongoDB and display "MongoDB connected using Mongoose" in the console upon a successful connection.

## Resources:

Mongoose documentation: https://mongoosejs.com/

## Notes/Hints:

1. No need to change prewritten code.
2. Pay close attention to the field types, requirements, and constraints specified in the objectives.
