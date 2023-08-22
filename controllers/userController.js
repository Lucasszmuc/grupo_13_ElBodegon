const cssFiles = require("./cssController");
const pageCssMapping = require("./pageCssMapping");
const userModel = require("../models/userModels");
const bcrypt = require('bcryptjs');

const userController = {
  login: (req, res) => {

    const userInJson = userModel.findByEmail(req.body.email);

    // Caso en que el mail no pertenece a ningún usuario
    if (!userInJson) {
      return res.redirect(
        "/users/login?error=El mail o la contraseña son incorrectos n"
      );
    }

    // Comparesync retorna un booleano
    const validPw = bcrypt.compareSync(req.body.password, userInJson.password);

    // Si la contraseña es válida
    if (validPw) {
      // Si se quiere mantener sesión iniciada
      if (req.body["keep-session"] === "on") {
        // Creamos la cookie userId, guardamos el id del usuario y hacemos que expire en un dia
        res.cookie("email", userInJson.email, {
          maxAge: 1000 * 60 * 60 * 24,
        });
      }
      req.session.username = userInJson.username;

      res.redirect("/");
    } else {
      res.redirect(
        "/users/login?error=El mail o la contraseña son incorrectos"
      );
    }
  },

  logOut: (req, res) => {
      // Elimina la propiedad 'user' de la sesión
      delete req.session.user 
      
    if (req.cookies.email) {
      // Elimina la cookie 'email'
      res.clearCookie('email');
      
      res.redirect('/'); // Redirige a la página principal u otra ubicación
    } else {
      res.redirect('/'); // Redirige a la página principal si no hay cookie
    }
  },

  register: (req, res) => {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      type: "Customer",
      avatar: req.file.filename
    };

    const user = userModel.create(newUser);

    if (user.error) {
      res.redirect("/users/register?error=" + user.error);
    } else {
      res.redirect("/");
    }
  },

  getLogin: (req, res) => {
    const currentPage = "login";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./users/login", { cssFiles, cssIndex });
  },
  getRegister: (req, res) => {
    const currentPage = "register";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./users/register", { cssFiles, cssIndex });
  },
  getProfile: (req, res) => {
    const currentPage = "profile";
    const cssIndex = pageCssMapping[currentPage];
    res.render('./users/profile', { cssFiles, cssIndex, user: req.session.user })
  }
};

module.exports = userController;
