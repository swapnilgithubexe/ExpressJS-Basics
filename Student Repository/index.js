import express from "express";
import studentRouter from "./src/features/student/student.routes.js";

const app = express();

app.use(express.json());
app.use("/api/student", studentRouter);

export default app;
