const express = require("express");
const app = express();
const path = require("path");
const ruta = path.resolve(__dirname, "./public");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const mainRoutes = require("./routes/mainRoutes");
const methodOverride = require('method-override');

//seteamos en ejs
app.use(express.static("public"));
app.set("view engine", "ejs");

//seteamos para que procese el PUT y el DELETE
app.use(methodOverride('_method'))

//seteamos para que use Json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Rutas
app.use("/", mainRoutes);
app.use("/user", userRoutes);
app.use("/producto", productRoutes);


// Error 404
app.use((req,res,next) =>{
res.status(404).render(path.join(__dirname,'./views/users/notFound'))});

app.listen(3003, () => {
  console.log("Servidor funcionando en el puerto 3003");
});

