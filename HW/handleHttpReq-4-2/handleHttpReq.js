const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  const { body } = req;
  res.send(`Student information: ${body}`);
});

server.post("/createStudentId", (req, res) => {
  const { body } = req;
  console.log(body, "this is the NEW Student ID ");
  res.json(body);
});

server.put("/update", (req, res) => {
  res.send("<h1>Hi, Your Account is Updated</h1>");
});

server.delete("/delete", (req, res) => {
  const { body } = req;
  res.send(`Deleted ${body}`);
});

server.listen(5050, (err) => {
  if (err) {
    console.warn("Server failed to Start");
  } else {
    console.log("Server Started Successfully");
  }
});
