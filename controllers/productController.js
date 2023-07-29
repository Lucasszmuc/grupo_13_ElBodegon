const cssFiles = require('../controllers/cssController');

const productController = {
  getProductDetail: (req, res) => {
    res.render("./products/productDetail", {cssFiles});
  },
  showMenu: (req, res) => {
    res.render("./products/menu", {cssFiles});
  },
  showRecetas: (req, res) => {
    res.render("./products/recetas", {cssFiles});
  },
  showCarrito: (req, res) => {
    res.render("./products/carrito", {cssFiles});
  },
  getEditProduct: (req, res) => {
    res.render("./products/editProduct", {cssFiles});
  },
  getcreateProduct: (req, res) => {
    res.render("./products/createProduct", {cssFiles});
  },
};

module.exports = productController;
