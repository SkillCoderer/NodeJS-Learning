// Class 4/7/2025

const { response } = require("express");

// It contains all the Call-backs / Handlers

const handler1 = (req, res) => {
  res.send("Response from the Get Path");
};

const handler2 = (req, res) => {
  res.send("Response from the OPost Path");
};

// Class 4/8/2025

// File handler Controller
const fthandler = (req, res) => {
  const { query } = req;
  if (query.fileType === "text") {
    console.log("Requested a text File");
    response.sendFile(`${__dirname}/Files/hello.txt`); // This method Allows us to send Files
  } else if (query.fileType === "json") {
    console.log("Requested a JSON File");
    response.sendFile(`${__dirname}/Files/hello.json`); // This method Allows us to send Files
  } else if (query.fileType === "html") {
    console.log("Requested a HTML File");
    response.sendFile(`${__dirname}/Files/hello.html`); // This method Allows us to send Files
  }
};

// Class 4/9/2025

// Handler for Dynamic HTML Page
const templateHandler = (req, res) => {
  console.log("Requested for a Template");
  const htmlString = "<strong>This is Non-Escaping taglet</strong>";
  // Use Render Method to create and send Dynamic HTML Files
  res.render(`${__dirname}/views/index.ejs`, {
    name: "Ram Satti",
    rawHtmlContent: htmlString,
  });
};

module.exports = {
  handler1,
  handler2,
  fthandler,
  templateHandler,
};
