const productController = {
  getProductDetail: (req, res) => {
    res.render("./products/productDetail");
  },
  showMenu: (req, res) => {
    res.render("./products/menu");
  },
  showRecetas: (req, res) => {
    res.render("./products/recetas");
  },
  showCarrito: (req, res) => {
    res.render("./products/carrito");
  },
  getEditProduct: (req, res) => {
    res.render("./products/editProduct");
  },
  getcreateProduct: (req, res) => {
    res.render("./products/createProduct");
  },
};

module.exports = productController;
