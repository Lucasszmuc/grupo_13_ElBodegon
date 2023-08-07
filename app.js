const express = require("express");
const app = express();
const path = require("path");

const ruta = path.resolve(__dirname, "./public");

app.use(express.static(ruta));
app.set("view engine", "ejs");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");
const aboutUsRoutes = require("./routes/aboutUsRoutes");
const mainRoutes = require("./routes/mainRoutes");

app.use("/", mainRoutes);
app.use("/user", userRoutes);
app.use("/", aboutUsRoutes);
app.use("/producto", productRoutes);
app.use("/admin", adminRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3003, () => {
  console.log("Servidor funcionando en el puerto 3003");
});

/*
userController:
login.ejs: Vista para el inicio de sesión.
register.ejs: Vista para el registro de nuevos usuarios.


productController:
index.ejs: Vista para mostrar la página de inicio con el listado de productos o alguna sección principal relacionada con los productos.
productoDetail.ejs: Vista para mostrar el detalle de un producto específico.
menu.ejs: Vista para mostrar la lista de productos disponibles en el menú.
recetas.ejs: Vista para mostrar la lista de recetas de cocina.


cartController:
carrito.ejs: Vista para mostrar el contenido del carrito de compras.


adminController:
dashboard.ejs: Vista para mostrar un panel de administración con las herramientas para gestionar productos, usuarios, etc.


aboutUsController:
nosotros.ejs: Vista para mostrar información sobre la empresa o el equipo. */
