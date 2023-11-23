const cssFiles = require("./cssController");
const pageCssMapping = require("./pageCssMapping");
const { User, Product } = require('../database/models');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");

const userController = {
  login: async (req, res) => {
    const currentPage = 'login';
    const cssIndex = pageCssMapping[currentPage];

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render('users/login', {
          errors: errors.array(),
          old: req.body,
          cssFiles,
          cssIndex
        });
      }


      const user = await User.findOne({ where: { email: req.body.email } });

      if (!user) {
        return res.redirect('/users/login?error=El mail o la contraseña son incorrectos');
      }

      // Comparar contraseña
      const validPw = await bcrypt.compare(req.body.password, user.password);
      if (!validPw) {
        return res.redirect('/users/login?error=El mail o la contraseña son incorrectos');
      }

      
      req.session.user = user;  
      
      if (req.body['keep-session'] === 'on') {
        res.cookie('email', user.email, { maxAge: 1000 * 60 * 60 * 24 }); // 24 horas
      }
      const currentPage = "index";
      const cssIndexi = pageCssMapping[currentPage];
      const products = await Product.findAll({
        raw: true,
        nest: true,
        limit: 8
      });
      return res.render('./main/index',{user: req.session.user, cssFiles, cssIndex: cssIndexi, products});
    } catch (error) {
      console.error(error);
      return res.redirect(`/users/login?error=${error}`);
    }
  },

  logOut: (req, res) => {

    delete req.session.user

    if (req.cookies.email) {
      // Elimina la cookie 'email'
      res.clearCookie('email');

      res.redirect('/');
    } else {
      res.redirect('/');
    }
  },
  register: async (req, res) => {
    const currentPage = 'register';
    const cssIndex = pageCssMapping[currentPage];

    const errors = validationResult(req);

    try {
      if (!errors.isEmpty()) {
        return res.render('users/register', {
          errors: errors.array(),
          old: req.body,
          cssFiles,
          cssIndex,
        });
      }


      const existingUser = await User.findOne({ where: { email: req.body.email } });

      if (existingUser) {
        const errorEmail = { msg: 'El email ya está registrado. Por favor, utiliza otro email.' };
        return res.render('users/register', {
          errorEmail,
          old: req.body,
          cssFiles,
          cssIndex,
        });
      }

      let avatar = 'defaultAvatar.png';

      if (req.file && req.file.filename) {
        avatar = req.file.filename;
      }

      const user = await User.create({
        id: uuid.v4(),
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        username: req.body.username,
        type: 'Customer',
        avatar: avatar,
      });

      req.session.user = user;

      return res.redirect('./login');
    } catch (error) {
      console.log(error);
      return res.redirect('/users/register?error=' + error);
    }
  },
  deleteProfile: async (req, res) => {
    try {
      let result = await User.destroy({
        where: {
          id: req.params.id
        },
      });

      delete req.session.user

      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },
  editProfile: async (req, res) => {
    try {

      const updatedProfile = {
        ...req.body,
      };


      if (req.file) {
        updatedProfile.avatar = req.file.filename;
      }

      if (updatedProfile.avatar === '') {
        let imagen = await User.findOne({
          where: {
            id: updatedProfile.id
          }
        });

        updatedProfile.avatar = imagen.avatar;
      }

      console.log(updatedProfile)


      await User.update(updatedProfile, {
        where: {
          id: updatedProfile.id
        }
      })

      res.redirect('/users/profile')

    } catch (error) {
      console.log(error)
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
    const user = req.session.user

    res.render('./users/profile', { cssFiles, cssIndex, user: req.session.user })

  }
};

module.exports = userController;
