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
function ageVerifyMiddleware(request, response, next) {
  if (request.query.age < 18) {
    response.send("You need to be atleast 18 years");
  } else {
    console.log("Proceed to Next step");
    next(); // This function wil handover the Control to the Next Middleware in the order/Sequence
  }
}

// Get Method
// server.get("/getData", (req, res) => {
//   res.send(req.body + " this is the request body value");
// });

// // Post Method
// server.post("/getAccess", customMiddleware, (req, res) => {
//   res.send(`${req.body.name}, welcome to the Services!`);
// });

// Class 4/8/2025

// Age Verification Middleware

// FileType Verification MiddlewareW
const fileTypeVerify = (req, res, next) => {
  const { query } = req;
  // RegEx -> Regular Expressions
  const fileTypePattern = /^(text|json|html)$/;
  if (fileTypePattern.test(fileType)) {
    // Test Method -> Will compare the RegEx Pattern against the string; returns True or False
    console.log("Requested File-Type Exists!");
    next();
  } else {
    res.send("File type does not Exist.");
  }
};

// Server Listening
// server.listen(port, (err) => {
//   if (err) {
//     console.error("Something went Wrong :c");
//   } else {
//     console.log(`Server Started at Port ${port}`);
//   }
// });

module.exports = {
  ageVerifyMiddleware,
  fileTypeVerify,
};
