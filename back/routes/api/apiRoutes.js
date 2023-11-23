const express = require('express');
const router = express.Router();

const apiProductController = require('../../controllers/api/products/apiProductController');
const apiUserController = require('../../controllers/api/users/apiUserController');

// Rutas para productos
router.get('/products', apiProductController.getProducts);
router.get('/product/:id/detail', apiProductController.getProductDetail);

// Rutas para usuarios
router.get('/users', apiUserController.getUsers);
router.get('/user/:id/detail', apiUserController.getUserDetail);
router.put('/user/:id', apiUserController.updateUser);
router.delete('/user/:id', apiUserController.deleteUser);

module.exports = router;
