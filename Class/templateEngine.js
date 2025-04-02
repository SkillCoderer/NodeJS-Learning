// Class 4/1/2025

// Using template Engine known as "ejs" (Embedded JavaScript)
// ejs is Non-Core Module

// Creating Server
const { createServer } = require("http");
const fs = require("fs");
const ejs = require("ejs");

const port = 5050;
const server = createServer((req, res) => {
  // First read the ejs File
  let htmlData;
  fs.readFile("response.ejs", "utf-8", (err, data) => {
    if (err) {
      console.log("Failed");
    } else {
      console.log("File read Successfully");
      (htmlData = ejs.render(data)), { name: "ram" };
    }
  });
  res.write(htmlData, "\nThis is the HTML data"); // \n is an Escape Character
});

server.listen(port, (err) => {
  if (err) {
    console.error("Server Failed");
  } else {
    console.log(`Server Running at port ${port} successfully!`);
  }
});
