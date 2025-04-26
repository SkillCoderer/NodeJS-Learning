// Class 4/23/2025

const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    unique: false,
  },
});

// Class 4/24/2025

const sampleModel = mongoose.model("newCollection", mySchema);

module.exports = sampleModel;
