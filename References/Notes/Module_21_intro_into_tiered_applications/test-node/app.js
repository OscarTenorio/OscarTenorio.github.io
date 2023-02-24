//Following code copied from Node/Express tutorial, found at: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction

// first have to download Express and Node
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
