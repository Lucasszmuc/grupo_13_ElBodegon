const { body } = require('express-validator');

module.exports = validarRegistro = [

  body('username')
    .notEmpty().withMessage('Debes completar el nombre')
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
  body('email')
    .notEmpty().withMessage('Debes completar con un email válido')
    .isEmail().withMessage('Debes proporcionar un email válido'),
  body('password')
    .notEmpty().withMessage('Debes completar la contraseña')
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
    .withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'),

];
