const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

//GET
router.get("/editProduct", adminController.editProduct);
router.get("/createProduct", adminController.createProduct);

//POST
router.post("/products", adminController.createProduct);

module.exports = router;
