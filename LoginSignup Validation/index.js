import express from "express";
import productRoutes from "./src/features/product/routes/product.routes.js";
import userRoutes from "./src/features/user/routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

export default app;
