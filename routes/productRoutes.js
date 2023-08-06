const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/menu", productController.showMenu);
router.get("/recetas", productController.showRecetas);
router.get("/carrito", productController.showCarrito);
router.get("/:id", productController.getProductDetail);

module.exports = router;
