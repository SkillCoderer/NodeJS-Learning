// Class 4/7/2025

// It contains all the Call-backs / Handlers

const handler1 = (req, res) => {
  res.send("Response from the Get Path");
};

const handler2 = (req, res) => {
  res.send("Response from the OPost Path");
};

module.exports = {
  handler1,
  handler2,
};
