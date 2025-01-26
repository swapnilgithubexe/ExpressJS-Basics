# Title: User Database Management

# Introduction:

As a backend developer, you are tasked with enhancing the database functionality for user management in your application. This scenario involves user registration, login, logout, and password updates. Your goal is to ensure smooth database operations and validate user data effectively.

# Objectives:

1. Implement the 'connectToDb' function in 'config/db.js' to connect your application to MongoDB.

2. Create a user registration schema('src/features/user/user.schema.js') with the following validations:
   name: A required string with a minimum length of 3 characters.
   email: A unique, required string with a valid email format.
   mobile: A unique, required string.
   age: A required number between 0 and 100.
   password: A required string.
   type: A required string and can be either 'student,' 'fresher,' or 'experienced'

3. Implement the 'userRegistration' controller and its corresponding 'userRegistrationRepo' function in the user repository to handle user registration. If any field is found to be invalid during the registration process, ensure that the user receives an appropriate error message along with a 400 Bad Request status code.

Additionally, ensure that the 'userRegistrationRepo' function returns the following:
For a valid request body: An object with the structure { success: true, res: user_document }.

For errors or an invalid request body: An object with the structure { success: false, error: { statusCode: status_code, msg: "error message" } }.

Maintain the specified return types, as the 'userRegistrationRepo' function is used by the 'userRegistration' controller to provide the user with the appropriate response based on the response received from it.

For further details, please refer to the provided video link under '# Expected Output'.

4. Implement the 'userLoginRepo' function within the user repository to manage user login operations. Ensure that it returns the following:

For valid credentials: An object with the structure { success: true, res: user_document }.

For errors or invalid credentials: An object with the structure { success: false, error: { statusCode: status_code, msg: "error message" } }.

Maintain these specified return types as the 'userLoginRepo' function is utilized by the 'userLogin' controller to provide users with appropriate responses based on the received output.

5. Implement the 'updateUserPassword' controller and its corresponding 'updateUserPasswordRepo' function in the user repository for updating user passwords.
   The route for password updates is "/codingninjas/api/user/update/password" which is a POST request. Only the user's new password should be passed in the request body, and you can retrieve the \_id of the logged-in user from req.\_id(refer 'jwtAuth' middleware for the logic).

# Expected Output:

Video Link: https://drive.google.com/drive/folders/16BmSk1-32gsCMGvi9pUlG0--CB_zL6N-?usp=sharing

# Resources:

Mongoose: https://mongoosejs.com/docs/validation.html

# Notes/Hints:

1. Schema Validation: Consider using Mongoose for schema validation, enforcing required fields, and email format.

2. Response: Maintain the specified response format in 'userLoginRepo','userRegistrationRepo' and 'updateUserPasswordRepo'.

3. Handle validation errors with clear error messages and a 400 Bad Request response.

4. Don't change the pre-written code.

5. Changes are meant to be done only in 'user' repository.
