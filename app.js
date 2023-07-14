const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

app.listen(3050, () => {
  console.log("el servidor anda bien");
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});