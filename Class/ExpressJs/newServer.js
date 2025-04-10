// Class 4/7/2025

// Objective: Router & Controllers
// // Router -> Handles Incoming requests and assigns to a Callback
// // Controllers -> Callbacks that handle requests
// MVC -> Models Views Controllers
// MVT -> Model View Templates
// Model -> Database / tables in the Database
// Views -> HTML Templates / Static Data

const express = require("express");
const server = express();
const myRouter = require("./routes"); // Middleware that handles Routes
const port = 5050;

// Class 4/9/2025

// Make server use the Router
server.use(myRouter);
server.set("view engine", "ejs"); // Setting to make the Server understand that EJS is the Template Engine

// Use express.static for sending CSS, Images, Text Files, etc.
server.use(express.static(`${__dirname}/public`));

server.listen(port, (err) => {
  if (err) {
    console.warn("Something went Wrong :c");
  } else {
    console.info(`Server Started at Port ${port}`);
  }
});
