const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const userValidate = require('../middlewares/validateRoutes');
const productValidation = require('../middlewares/productValidation')
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
router.get("/editProduct/:id", productController.getEditProduct);
router.get("/createProduct", productController.getCreateProduct);
router.get("/menu", productController.showMenu);
router.get("/recetas", userValidate.validate, productController.showRecetas);
router.get("/carrito", userValidate.validate, productController.showCart);
router.get("/:id", userValidate.validate, productController.getProductDetail);

//POST
router.post("/createProduct",upload.single("image"),productValidation ,productController.createProduct);
router.post('/carrito',productController.insertProduct)

//PUT
router.put(
  "/editProduct/:id",
  upload.single("image"),
  productValidation,
  productController.editProduct
);

//DELETE
router.delete("/editProduct/:id", productController.deleteProduct);
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
