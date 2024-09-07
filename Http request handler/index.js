// Please don't change the pre-written code

const express = require("express");
const server = express();

// Write your code here
server.get("/", (req, res, next) => {
  res.send("get");
})

server.put("/", (req, res, next) => {
  res.send("put");
})

server.post("/", (req, res, next) => {
  res.end("post");
})

server.delete("/", (req, res, next) => {
  res.send("delete");
})

module.exports = server;
