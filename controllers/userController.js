const cssFiles = require("./cssController");
const pageCssMapping = require("./pageCssMapping");
const userModel = require("../models/userModels");
const { User } = require('../database/models');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');

const userController = {
  login: async (req, res) => {

    try {
      var user = await User.findOne({
        where: {
          email: req.body.email
        }
      });

      if (!user) {
        return res.redirect(
          "/users/login?error=El mail o la contraseña son incorrectos n"
        );
      }
      if (req.body.password === req.body.password2) {
        try {
          const validPw =  await bcrypt.compareSync(req.body.password, user.dataValues.password)
          console.log(validPw)
          if (validPw === true) {

            if (req.body["keep-session"] === "on") {
              // Creamos la cookie email, guardamos el email del usuario y hacemos que expire en un dia
              res.cookie("email", user.dataValues.email, {
                maxAge: 1000 * 60 * 60 * 24,
              });
            }
            res.redirect("/");
          } 
        } catch (error) {
          return res.redirect(
            "/users/login?error=Las contraseñas no coinciden "
          );
        }

      } else {
        res.redirect(
          "/users/login?error=Las contraseñas no coinciden"
        );
      }
    } catch (error) {
      res.redirect("/users/login");
    }

    //   const userInJson = userModel.findByEmail(req.body.email);

    //   // Caso en que el mail no pertenece a ningún usuario
    // if (!userInJson) {
    //   return res.redirect(
    //     "/users/login?error=El mail o la contraseña son incorrectos n"
    //   );
    // }

    // if (req.body.password === req.body.password2) {

    //   // Comparesync retorna un booleano
    //   const validPw = bcrypt.compareSync(req.body.password, userInJson.password);

    //   // Si la contraseña es válida
    //   if (validPw) {
    //     // Si se quiere mantener sesión iniciada
    // if (req.body["keep-session"] === "on") {
    //   // Creamos la cookie userId, guardamos el id del usuario y hacemos que expire en un dia
    //   res.cookie("email", userInJson.email, {
    //     maxAge: 1000 * 60 * 60 * 24,
    //   });
    // }
    //     req.session.username = userInJson.username;

    //     res.redirect("/");
    //   } else {
    //     res.redirect(
    //       "/users/login?error=El mail o la contraseña son incorrectos"
    //     );
    //   }
    // } else {
    //   res.redirect(
    //     "/users/login?error=El mail o la contraseña son incorrectos"
    //   );
    // }
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

  register: async (req, res) => {
    try {
      const respuesta = User.create({
        id: uuid.v4(),
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        username: req.body.username,
        type: "Customer",
        avatar: req.file.filename
      });
    } catch (error) {
      res.redirect("/users/register?error=" + error);
    }
    res.redirect('/')

    // const user = userModel.create(newUser);

    // if (user.error) {
    //   res.redirect("/users/register?error=" + user.error);
    // } else {
    //   res.redirect("/");
    // }
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
