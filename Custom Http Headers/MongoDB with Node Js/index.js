import express from "express";
import confessionRouter from "./src/features/confession/confession.routes.js";

const app = express();

app.use(express.json());
app.use("/api/confessions", confessionRouter);

export default app;
