const {body} = require('express-validator');


module.exports = validarRegistro = [
    body('username').notEmpty().withMessage('Debes Completar el Nombre'),
    body('email').isEmail().notEmpty().withMessage('Debes completar el Email'),
    body('password').notEmpty().withMessage('Debes Completar la Contraseña'),
    body('password2').notEmpty().withMessage('Debes Repetir la contraseña')
];