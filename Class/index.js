// Class 3/29/2025

// Modules
// // Core Modules are modules that are pre-existing and needed for NodeJs
// // Non-Core Modules are modules that are not in NodeJs and help with extra functionality and Quality of Life. However, Non-Core-Modules are needed as not everything can be done through Core Modules.

// Importing the Modules
const http = require("http"); // This Core Module for Creating a server is to listen for Requests
const urlModule = require("url"); // This is a Core Module for Handling the Request URL in a Better Way, Also used for Accessing Query
const fs = require("fs"); // This is a Core Module for handling File operations (Include Reading, Writing, Updating, Deleting, Renaming)
// Purpose of Above is to Create Server
// Server Purpose is to give resources to browser

// __dirname & __file => Core Variables
console.log(__dirname); // Parent Folder (Where index.js is)
console.log(__filename); // Current File (Where Exactly I am working at)

// Varaiables
const port = 3400; // 65535 Ports Available to Use. However, I can't use some Restricted Ports (Http, Https, Mail, Etc.)

// Create the Server
const server = http.createServer((req, res) => {
  // Extract the Information
  const { url, headers, method } = req; // Destructuring the Request Object to get the req
  // url => Link or source used from the browser (Data type = String)
  // headers => Additional Data related to the request from the browser (Data type = String)
  // // Additional Data has the Information that the User Submit
  // // Types of Headers:
  // // // Request Headers
  // // // Response Headers
  // method => Type of HTTP Method used from the browser to access something or perform some action (Data type = String)
  // const parsedURL = urlModule.parse(url, true); // Parse the URL (Conversion from Str to Obj), true Value is for accessing the Query Parameters (Default is false)
  // const { name, place } = parsedURL.query; // query will contain query Parameters (located in the link of the webpage (Ex: Youtube, what you search in query Parameter))
  // res.write(`Hello ${name} from ${place}, Welcome to the Server.`); // Sends the Response
  // res.end(); // To let the Client know the Response transfer is completed
  if (url.includes("readFile")) {
    //if url has read file perform read operation
    fs.readFile("Message.txt", (err, data) => {
      if (err) {
        res.end('<h1 style="color:red">Unable to read file</h1>');
      } else {
        res.write('<h1 style="color:green">File Read Successfully</h1>');
        res.end(<h1 style="color:blue">${data}</h1>);
      }
    });
  } else if (url.includes("writeFile")) {
    fs.writeFile("Message.txt", "I want to write this into file", (err) => {
      if (err) {
        res.end('<h1 style="color:red">Unable to write file</h1>');
      } else {
        res.end('<h1 style="color:green">File Write Successfully</h1>');
      }
    });
  } else if (url.includes("updateFile")) {
    fs.appendFile(
      "Message.txt",
      "\nI want to update this in to file",
      (err) => {
        if (err) {
          res.end('<h1 style="color:red">Unable to update file</h1>');
        } else {
          res.end('<h1 style="color:green">File Updated Successfully</h1>');
        }
      }
    );
  } else if (url.includes("renameFile")) {
    fs.rename("Message.txt", "Greet.txt", (err) => {
      if (err) {
        res.end('<h1 style="color:red">Unable to rename file</h1>');
      } else {
        res.end('<h1 style="color:green">File Renamed Successfully</h1>');
      }
    });
  } else if (url.includes("deleteFile")) {
    fs.unlink("Greet.txt", (err) => {
      if (err) {
        res.end('<h1 style="color:red">Unable to delete file</h1>');
      } else {
        res.end('<h1 style="color:green">File Deleted Successfully</h1>');
      }
    });
  } else {
    res.end("Welcome to File System");
  }
});

// Server Activation & Listen to incoming req
server.listen(port, (err) => {
  // Requires (portNumber, Callback Function)
  if (err) {
    console.error("Something went Wrong :c");
  } else {
    console.log("Server Started Successfully");
  }
});
