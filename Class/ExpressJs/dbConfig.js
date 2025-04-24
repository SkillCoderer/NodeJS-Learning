// Class 4/23/2025

// ./models folder will store all the collections

const mongoose = require("mongoose");
const dbString = "mongodb://localhost:27017/newDB";

async function dbConnect() {
  await mongoose.connect(dbString);
}

module.exports = dbConnect;
