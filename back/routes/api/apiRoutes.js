const express = require('express');
const router = express.Router();

const apiProductController = require('../../controllers/api/products/apiProductController');
const apiUserController = require('../../controllers/api/users/apiUserController');

// @Get /api/products
router.get('/products', apiProductController.getProducts);
router.get('/users', apiUserController.getUsers)

//@Get /api/product/:id/detail
router.get('/product/:id/detail', apiProductController.getProductDetail)
router.get('/user/:id/detail', apiUserController.getUserDetail)
module.exports = router;