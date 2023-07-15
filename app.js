const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./public"));

app.listen(3050, () => {
  console.log("El servidor esta corriendo en el puerto 3050");
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});