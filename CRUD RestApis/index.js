import express from "express";
import artPieceRoutes from "./src/features/artPiece/artPiece.routes.js";
const app = express();
app.use(express.json());

app.use("/api/artPieces", artPieceRoutes);

export default app;
