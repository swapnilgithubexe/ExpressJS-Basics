
const express = require("express")
const server = express()
server.get("/", (req, res) => {
  res.send("Be a Coding Ninja.");
})
server.listen(4000, () => {
  console.log(`Server is running on port 4000`)
})

module.exports = { server };
