import express from "express";
import userRoutes from "./src/features/user/routes/user.routes.js";

import loggerMiddleware from "./src/middlewares/logger.middleware.js";
const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Welcome to CN E-Comm App" });
});

// Middleware to handle invalid routes
app.use((req, res) => {
  res
    .status(404)
    .json({ success: false, msg: `Invalid path: ${req.originalUrl}` });
});

export default app;
