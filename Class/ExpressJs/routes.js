// Class 4/7/2025

// Creating a Router and Assigning Routes
const router = require("express").Router(); // Creates a router
const { handler1, handler2 } = require("./controllers");

// Tells the server to work on the Get Method when URL executed
router.get("/getPath", handler1);

// Tells the server to work on the Post Method when URL executed
router.post("/postPath", handler2);

module.exports = router;
