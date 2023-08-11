const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../public/img"));
    },
  
    filename: (req, file, cb) => {
      const newFileName =
        "product-" + Date.now() + path.extname(file.originalname);
      cb(null, newFileName);
    },
  });

  
const upload = multer({ storage });

//GET
router.get("/editProduct/:id", productController.getEditProduct);
router.get("/createProduct", productController.getCreateProduct);

//POST
router.post("/createProduct",upload.single("image"),productController.createProduct);

//PUT
router.put("/editProduct/:id", productController.editProduct);

//DELETE
router.delete("/:id", productController.deleteProduct);

router.get("/menu", productController.showMenu);
router.get("/recetas", productController.showRecetas);
router.get("/carrito", productController.showCarrito);
router.get("/:id", productController.getProductDetail);

module.exports = router;
