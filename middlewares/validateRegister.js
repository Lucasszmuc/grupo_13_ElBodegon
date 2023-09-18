const {body} = require('express-validator');


module.exports = validarRegistro = [
    body('username').notEmpty().withMessage('Debes Completar el Nombre'),
    body('email').isEmail().notEmpty().withMessage('Debes completar con un email valido'),
    body('password').notEmpty().withMessage('Debes Completar la Contraseña'),
];