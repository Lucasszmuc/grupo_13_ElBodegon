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
  },
  getEditProduct: (req, res) => {
    const currentPage = "editProduct";
    const cssIndex = pageCssMapping[currentPage];
    const productId = req.params.id;
    const selectedProduct = productModel.findById(productId);

    res.render("./products/editProduct", {
      cssFiles,
      cssIndex,
      product: selectedProduct,
    });
  },
  getCreateProduct: (req, res) => {
    const currentPage = "createProduct";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/createProduct", { cssFiles, cssIndex });
  },
  createProduct: (req, res) => {

    const newProduct = {
      name: req.body.name,
      price: req.body.price,
      imagen: req.file.filename,
    };

    console.log(newProduct)

    const createdProduct = productModel.createProduct(newProduct);
    console.log(createdProduct);
    res.redirect("/producto/" + createdProduct.id);
  },

  editProduct: (req, res) => {
    console.log(req.body)
    let updatedProduct = {
      id: Number(req.params.id),
    };

    updatedProduct = {
      ...updatedProduct,
      ...req.body,
    };

    productModel.updateProduct(updatedProduct);

    res.redirect("/");
  },
  deleteProduct: (req, res) => {

    productModel.deleteProduct(Number(req.params.id));

    res.redirect("/");
  },
};

module.exports = productController;
