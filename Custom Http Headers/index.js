// Please don't change the pre-written code

const express = require("express");
const server = express();

// Set custom header on response object
const setCustomHeader = (res, key, value) => {
  // Write your code here
  res.set(key, value)
  console.log(`${key} with value ${value} has been set successfully!`)
};

// Route that uses the setCustomHeader function
server.get("/", (req, res) => {
  setCustomHeader(res, "Content-Type", "application/json");
  res.send(`get method called!`);
});

module.exports = { setCustomHeader, server };
