// Class 4/2/2025

// Importing Express
const express = require("express"); // This returns a function
const server = express(); // This Step initiates a server

// HTTP Requests -> Get, Post, Put, Delete
// CRUD -> Create, Read, Update, Delete
// // Get -> This is for retriving data
// // Post -> This is for Sending some data to create new records in the database
// // Put -> This is for updating existing data in a database without creating a new record
// // Delete -> This is for deleting existing data in a database
// Other HTTP Requests are there, but there are the most Common / Important

// Setting up The Server
server.use(express.json()); // Middleware Function

// Get Method
server.get("/", (req, res) => {
  // Takes 2 Params. (Path, Callback Func)
  res.send("<h1>Hello Welcome to ExpressJS</h1>"); // We use Send method instead of Write Method, Send Equivalent to res.write & res.end
});

// Post Method
server.post("/createAccount", (req, res) => {
  const { body } = req;
  console.log(body, "This is the body value");
  res.json(body);
});

// Put Method
server.put("/update", (req, res) => {
  res.send("<h1>Hi, Your Account is Updated</h1>");
});

// Make the server listen for the incoming Request
server.listen(5050, (err) => {
  if (err) {
    console.warn("Server failed to Start");
  } else {
    console.log("Server Started Successfully");
  }
});
