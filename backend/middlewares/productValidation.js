const { body, validationResult } = require('express-validator');

const productValidation = [
  body('name')
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isLength({ min: 5 })
    .withMessage('El nombre debe tener al menos 5 caracteres'),

  body('description')
    .isLength({ min: 20 })
    .withMessage('La descripción debe tener al menos 20 caracteres'),

//   body('image').custom((value, { req }) => {
//     if (!req.file) {
//       throw new Error('Debes cargar una imagen válida (JPG, JPEG, PNG, GIF)');
//     }
//     if (!['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(req.file.mimetype)) {
//       throw new Error('Formato de imagen no válido. Debe ser JPG, JPEG, PNG o GIF');
//     }
//     return true;
//   }),
];

module.exports = productValidation;

