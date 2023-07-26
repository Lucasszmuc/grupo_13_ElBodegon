const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/editProduct", adminController.editProduct);
router.get("/createProduct", adminController.createProduct);

module.exports = router;
