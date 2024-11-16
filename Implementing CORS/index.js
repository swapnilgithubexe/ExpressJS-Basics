import express from "express";
import empRoutes from "./routes/employee.route.js";
import cors from "cors";
const app = express();

// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here
var corsOptions = {
  origin: "*",
  allowHeaders: "*"
}
app.use(cors())

app.use("/api/v1/emp", empRoutes);

export default app;
