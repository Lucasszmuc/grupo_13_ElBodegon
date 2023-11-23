const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const userValidate = require('../middlewares/validateRoutes');
const productValidation = require('../middlewares/productValidation')
const isAdmin = require('../middlewares/adminAuth')
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/img/products"));
  },

  filename: (req, file, cb) => {
    const newFileName =
      "product-" + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const upload = multer({ storage });

//GET
router.get("/editProduct/:id", userValidate.validate, isAdmin, productController.getEditProduct);
router.get("/createProduct", userValidate.validate, isAdmin, productController.getCreateProduct);
router.get("/menu", productController.showMenu);
router.get("/recetas", userValidate.validate, productController.showRecetas);
router.get("/carrito", userValidate.validate, productController.showCart);
router.get("/:id", productController.getProductDetail);

//POST
router.post("/createProduct", userValidate.validate, isAdmin, upload.single("image"), productValidation, productController.createProduct);
router.post('/carrito', productController.insertProduct)

//PUT
router.put(
  "/editProduct/:id",
  userValidate.validate,
  isAdmin,
  upload.single("image"),
  productValidation,
  productController.editProduct
);

//DELETE
router.delete("/editProduct/:id", isAdmin, productController.deleteProduct);
router.delete("/carrito/:id", productController.deleteProductCart);


router.get("/search", (req, res) => {
  const productModel = {
    findBySearch: (search) => {
      const products = prodcutModel.findAll();
      const results = products.filter((product) =>
        product.title.contains(search)
      );
      return results;
    },
  };
  const searchQuery = req.query.busqueda;

  productModel.findBySearch(searchQuery);
});

module.exports = router;
