### Title:

Book Management API

## Introduction + Scenario:

You are tasked with building a RESTful API for managing books using Mongoose and Express. The API should allow users to create new books and retrieve book details by their IDs. This API will serve as the backbone for a book management system.

## Objectives:

1. Create a model using the "bookSchema."

2. Implement 'createBook' and 'getOne' book controllers along with their respective 'createBook' and 'getOne' repository functions for the creation of a book and filtering a book by its ID.
   Note: When creating a new book, the attributes should match those defined in the book schema. Additionally, ensure that you send a 404 status when the book ID does not exist.

3. The endpoints for creating a book and filtering a book by its ID are provided in the book routes.

## Expected Output:

Output should look like: https://files.codingninjas.in/final-31264.mp4 

## Notes/Hints:

1. Ensure proper error messages and status codes are used for error responses.
2. Make sure to handle cases where a book with a given ID does not exist.
3. No need to change the pre-written code.
