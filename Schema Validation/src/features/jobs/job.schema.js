import mongoose from "mongoose";

export const jobSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  company: { type: String },
  salary: { type: Number },
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
