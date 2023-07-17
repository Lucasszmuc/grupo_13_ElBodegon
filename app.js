const express = require('express');
const app = express();
const path = require("path");
const ruta = path.resolve(__dirname, "./public");

app.use(express.static(ruta));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/vista-producto", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productoDetail.html"));
});

app.get("/carrito", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/carrito.html"));
});

app.listen(3003, () => {
  console.log("Servidor funcionando en el puerto 3003");
});
