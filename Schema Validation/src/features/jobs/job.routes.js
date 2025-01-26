import express from "express";
import { auth } from "../../middlewares/jwtAuth.js";
import { applyJob } from "./job.controller.js";

const router = express.Router();

router.route("/apply/:id").get(auth, applyJob);

export default router;
