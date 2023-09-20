const express = require('express');
const router = express.Router();

const apiProductController = require('../../controllers/api/apiProductController');

// @Get /api/products
router.get('/products', apiProductController.getProduct);

//@Get /api/product/:id/detail
router.get('/product/:id/detail', apiProductController.getProductDetail)

module.exports = router;