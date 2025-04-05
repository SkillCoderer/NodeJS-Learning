const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const port = 5050;

server.use(express.json());
server.use(bodyParser.text());

function roleMiddleware(req, res, next) {
  const { role, id, ownId } = req.body;

  if (role === "teacher") {
    next();
  } else if (role === "student") {
    id === ownId ? next() : res.send("You can only Access your own Data.");
  } else {
    res.send("You have to be a Student or Teacher.");
  }
}

server.post("/getStudent", roleMiddleware, (req, res) => {
  res.send(`Access granted to view the ID: ${req.body.id}`);
});

server.post("/updateStudent", roleMiddleware, (req, res) => {
  res.send(`Access granted to update teh ID: ${req.body.id}`);
});

server.listen(port, (err) => {
  if (err) {
    console.error("Something went wrong :c");
  } else {
    console.log(`Server started at port ${port}`);
  }
});
