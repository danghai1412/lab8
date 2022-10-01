const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const mongoose = require("mongoose");
const studentModel = require("./models/StudentSchema");
const url = "mongodb+srv://danghai1412:hai14122002@cluster0.b95irw9.mongodb.net/greenwich";
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect to db succeed !");
  }
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/student", (req, res) => {
  studentModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      //1. show dữ liệu ra console log
      //console.log(data);
      //2. show dữ liệu ra API bằng "send"
      //res.send(data);
      //3. show dữ liệu ra view bằng "render"
      res.render("student", { students: data });
    }
  });
});

app.listen(port);
