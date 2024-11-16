import express from "express";
import { getAllEmployees } from "../controllers/employee.controller.js";
const router = express.Router();

router.route("/").get(getAllEmployees);

export default router;
