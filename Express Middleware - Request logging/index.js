
const express = require("express");
const app = express();

const logRequest = (req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  next();
};
app.use(logRequest)

app.get("/", (req, res) => {
  res.send("Coding Ninjas!");
});

module.exports = app;
