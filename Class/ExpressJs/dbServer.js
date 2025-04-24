// Class 4/23/2025

const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./dbConfig");
const sampleSchema = require("./models/sampleSchema");
const mySchema = require("./models/sampleSchema");
const server = express();
const PORT = 5050;

dbConfig(); // Connects to DB
// Collection
server.get("/createCollection", async (req, res) => {
  if (mongoose.connection.readyState === 1) {
    // connection.readyState -> Particular value tells us the connection status of the Database; 0 -> Disconnected, 1 -> Connected, 2 -> Connecting, 3 -> Disconnecting
    // .models -> Create the Collections for us, (name, )
    await mongoose.model("newCollection", mySchema);
    res.send("Collection created!");
  } else {
    console.warn("DB not connected");
  }
});

server.get("/insertData", async (req, res) => {
  if (mongoose.connection.readyState === 1) {
    // connection.readyState -> Particular value tells us the connection status of the Database; 0 -> Disconnected, 1 -> Connected, 2 -> Connecting, 3 -> Disconnecting
    // .models -> Create the Collections for us, (name, )
    await mongoose.connection.db.collection("newCollection").insertOne({
      name: "ram",
      email: "something@gmail.com",
    });
    res.send("Collection created!");
  } else {
    console.warn("Failed to insert Data :c");
  }
});

server.listen(PORT, (err) => {
  if (err) {
    console.warn(`This error occured :c ${err}`);
  } else {
    console.log("Your server is good to go!");
  }
});
