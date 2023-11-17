const express = require("express");
const app = express();
const path = require("path");
var cors = require('cors')
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const mainRoutes = require("./routes/mainRoutes");
const apiRoutes = require('./routes/api/apiRoutes')
const authCookie = require('./middlewares/authenticateUser')
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// Configuración del motor de vistas y archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

// Configuración de middlewares en el orden correcto
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

//Configuracion de Session
app.use(session({secret: 'ElBodegonDigitalHouse2023', resave: false, saveUninitialized: true}));

//Configuracion de Cookie Parser
app.use(cookieParser())

//Configuracion de Auth Cookie
app.use(authCookie);


// Rutas
app.use("/", mainRoutes);
app.use("/product", productRoutes);
app.use("/users", userRoutes);
app.use('/api', apiRoutes)

// Error 404
// app.use((req,res,next) =>{
// res.status(404).render(path.join(__dirname,'./views/users/notFound'))});

app.listen(3003, () => {
  console.log("Servidor funcionando en el puerto 3003");
});
