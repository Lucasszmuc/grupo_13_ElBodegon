const express = require("express");
const app = express();
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const mainRoutes = require("./routes/mainRoutes");
const methodOverride = require('method-override');

// Configuración del motor de vistas y archivos estáticos
app.use(express.static("public"));
app.set("view engine", "ejs");

// Configuración de middlewares en el orden correcto
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Rutas
app.use("/", mainRoutes);
app.use("/user", userRoutes);
app.use("/producto", productRoutes);

// Error 404
app.use((req,res,next) =>{
res.status(404).render(path.join(__dirname,'./views/users/notFound'))});

app.listen(3003, () => {
  console.log("Servidor funcionando en el puerto 3003");
});
