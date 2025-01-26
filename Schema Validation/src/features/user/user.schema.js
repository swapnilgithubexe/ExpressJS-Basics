import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    minLength: [3, "The name should be at least 3 characters long"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
    match: [/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/],
  },
  mobile: {
    type: String,
    unique: true,
    required: [true, "mobile number is reuired"],
  },
  age: {
    type: Number,
    required: [true, "age is required"],
    validate: {
      validator: function (userAge) {
        return userAge > 0 && userAge <= 100;
      },
      message: "age must be b/w 0 and 100",
    },
  },
  password: { type: String, required: [true, "password is required"] },
  type: {
    type: String,
    enum: ["student", "fresher", "experienced"],
    required: [
      true,
      "The 'usetype' is required; it must be either 'student,' 'fresher,' or 'experienced",
    ],
  },
});
