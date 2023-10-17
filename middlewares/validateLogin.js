const { check } = require('express-validator');

module.exports = validarLogin = [
  check('email')
    .notEmpty()
    .withMessage('El campo de correo electrónico es obligatorio')
    .isEmail()
    .withMessage('Ingresa un correo electrónico válido'),
  check('password')
    .notEmpty()
    .withMessage('El campo de contraseña es obligatorio'),
];
