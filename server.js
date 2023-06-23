const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello");
});

app.get("/about", function (req, res) {
  res.send("this is the about page");
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
