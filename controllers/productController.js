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
    res.render("./products/menu", { cssFiles, cssIndex });
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
  },
  getEditProduct: (req, res) => {
    const currentPage = "editProduct";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/editProduct", { cssFile, cssIndex });
  },
  getcreateProduct: (req, res) => {
    const currentPage = "createProduct";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/createProduct", { cssFile, cssIndex });
  },
  getList: (req, res) => {
    const products = productModel.findAll();

    res.render("./producto/menu", { products }); // Es un atajo, hacerlo así es lo mismo que poner {products: products}
  },
};

module.exports = productController;
