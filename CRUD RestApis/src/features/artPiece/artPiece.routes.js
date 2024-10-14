import express from "express";
const router = express.Router();
import * as artPiecesController from "./artPiece.controller.js";

router.post("/", artPiecesController.createArtPiece);
router.get("/", artPiecesController.getAllArtPieces);
router.get("/:id", artPiecesController.getArtPiece);
router.put("/:id", artPiecesController.updateArtPiece);
router.delete("/:id", artPiecesController.deleteArtPiece);

export default router;
