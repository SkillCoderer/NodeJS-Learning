// Class 4/7/2025

// Creating a Router and Assigning Routes
const router = require("express").Router(); // Creates a router
const {
  handler1,
  handler2,
  fthandler,
  templateHandler,
} = require("./controllers");

// Class 4/8/2025

const { ageVerifyMiddleware, fileTypeVerify } = require("./middleWares");

// End Class 4/8/2025

// Tells the server to work on the Get Method when URL executed
router.get("/getPath", handler1);

// Tells the server to work on the Post Method when URL executed
router.post("/postPath", handler2);

// Class 4/8/2025

// Get Request for Sending out a File
router.get("/requestFile", ageVerifyMiddleware, fileTypeVerify, fthandler);

// Class 4/9/2025

// Get the Template on Making Request
router.get("/getTemplate", templateHandler);

module.exports = router;
