import express from "express";
import ConfessionController from "./confession.controller.js";

const confessionRouter = express.Router();

const confessionController = new ConfessionController();

confessionRouter.post("/", confessionController.create);

export default confessionRouter;
