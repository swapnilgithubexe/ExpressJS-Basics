import express from "express";
import bucketListRouter from "./src/features/bucketList/bucketList.routes.js";

const app = express();

app.use(express.json());
app.use("/api/bucket-list-items", bucketListRouter);

export default app;
