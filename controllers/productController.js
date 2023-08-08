const cssFiles = require("../controllers/cssController");
const pageCssMapping = require("./pageCssMapping");
const productModel = require("../models/productModels");

const productController = {
  getProductDetail: (req, res) => {
    const currentPage = "productDetail";
    const cssIndex = pageCssMapping[currentPage];
    const productId = req.params.id;
    const selectedProduct = productModel.findById(productId);

    res.render("./products/productDetail", { cssFiles, cssIndex,  product: selectedProduct });
  },
  showMenu: (req, res) => {
    const currentPage = "menu";
    const cssIndex = pageCssMapping[currentPage];
    const products = productModel.findAll();

    res.render("./products/menu", { cssFiles, cssIndex, products : products});
  },
  showRecetas: (req, res) => {
    const currentPage = "recetas";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/recetas", { cssFiles, cssIndex });
  },
  showCarrito: (req, res) => {
    const currentPage = "carrito";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/carrito", { cssFiles, cssIndex });
  }
};

module.exports = productController;
