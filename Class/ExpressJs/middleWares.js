// Class 4/3/2025

// Middlewares -> Take requests before server acts upon it (Client --Requests--> Middle Ware -> Server)
// // They confirm to make sure that the Requests the client sends are valid for the Server to render
// // Multiple types of Middlewares:
// // // App Level Middlewares: Accessible across every request
// // // Route Level Middlewares: Confined to a Particlar Path (Route = Path)
// // // Error Handling Middlewares: For an incoming request, its not 100% sure whether it can be always complete and it can always take back a response, may have some complications due to incompleteness. -> Unclear but will cover in Coding
// // // 3rd Party Middlewares: Middleware made by others; Using pre-existing middlewares

const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const port = 5050;

// App Level Middleware
server.use(express.json()); // .use will make sure of the Middleware Function; Express.json() Middleware will extract the JSON Format req body
server.use(bodyParser.text()); // This Middleware will recognize the text format in the request body

// Route Level Middleware
function customMiddleware(req, res, next) {
  if (req.body.age < 18) {
    res.send("You need to be atleast 18 years-old");
  } else {
    console.log("Proceed to Next Step");
    next(); // This function wil handover the Control to the Next Middleware in the order/Sequence
  }
}

// Get Method
server.get("/getData", (req, res) => {
  res.send(req.body + " this is the request body value");
});

// Post Method
server.post("/getAccess", customMiddleware, (req, res) => {
  res.send(`${req.body.name}, welcome to the Services!`);
});

// Server Listening
server.listen(port, (err) => {
  if (err) {
    console.error("Something went Wrong :c");
  } else {
    console.log(`Server Started at Port ${port}`);
  }
});
