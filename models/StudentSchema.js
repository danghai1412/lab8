const mongoose = require("mongoose");

var StudentSchema = mongoose.Schema({
  name: String,
  age: Number,
  mail: String,
  image: String,
});

var studentModel = mongoose.model("student", StudentSchema, "student");

module.exports = studentModel;