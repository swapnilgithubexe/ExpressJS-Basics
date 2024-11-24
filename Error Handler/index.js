import express from "express";
import userRoutes from "./src/features/user/routes/user.routes.js";
import { invalidRoutesHandlerMiddleware } from "./src/middlewares/invalidRoutes.middleware.js";
import {
  customErrorHandler,
  errorHandlerMiddleware,
} from "./src/middlewares/errorHandler.js";
const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.status(200).send("welcome to CN");
});

app.get("/test-custom-error", (req, res) => {
  throw new customErrorHandler(
    505,
    "testing app level custom error handling middleware"
  );
});

app.get("/test-unhandled-error", (req, res) => {
  throw "Unknown Server Error";
});

app.use(invalidRoutesHandlerMiddleware);

// Middleware to handle errors
app.use(errorHandlerMiddleware);

export default app;
