import express from "express";
import productRoutes from "./src/features/product/routes/product.routes.js";
import userRoutes from "./src/features/user/routes/user.routes.js";
import cookieParser from "cookie-parser";
import jwtAuth from "./src/middlewares/jwtAuth.js";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/product", jwtAuth, productRoutes);
app.use("/api/user", userRoutes);

export default app;
