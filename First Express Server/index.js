
const express = require("express");
const server = express();
server.get("/", (req, res) => {
  res.send("Be a Coding Ninja.");
})


module.exports = { server };
