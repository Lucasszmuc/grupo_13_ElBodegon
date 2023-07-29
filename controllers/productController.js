const cssFiles = require('../controllers/cssController');
const pageCssMapping = require('./pageCssMapping');

const productController = {
  getProductDetail: (req, res) => {
    const currentPage = 'productDetail';
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/productDetail", { cssFiles, cssIndex });
  },
  showMenu: (req, res) => {
    const currentPage = 'menu';
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/menu", { cssFiles, cssIndex });
  },
  showRecetas: (req, res) => {
    const currentPage = 'recetas';
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/recetas", { cssFiles, cssIndex });
  },
  showCarrito: (req, res) => {
    const currentPage = 'carrito';
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/carrito", { cssFiles, cssIndex });
  },
  getEditProduct: (req, res) => {
    const currentPage = 'editProduct';
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/editProduct", { cssFile, cssIndex });
  },
  getcreateProduct: (req, res) => {
    const currentPage = 'cerateProduct';
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/createProduct", { cssFile, cssIndex });
  },
};

module.exports = productController;
