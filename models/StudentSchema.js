const mongoose = require("mongoose");

var StudentSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  image: String,
  address: String,
  // các thuộc tính "name", "email",.... là các cột trong bảng
});

var studentModel = mongoose.model("student", StudentSchema, "student");
// Note: student là tên của bảng

module.exports = studentModel;