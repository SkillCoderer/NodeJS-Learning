// Class 4/23/2025

const { Schema } = require("mongoose");

const mySchema = new Schema({
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

module.exports = mySchema;
