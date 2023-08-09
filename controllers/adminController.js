const cssFiles = require("../controllers/cssController");
const pageCssMapping = require("./pageCssMapping");
const productModel = require("../models/productModels");

const adminController = {
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

    const createdProduct = productModel.createProduct(newProduct);

    res.redirect("/producto/" + createdProduct.id);
  },

  editProduct: (req, res) => {
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
    productModel.destroy(Number(req.params.id));

    res.redirect("/");
  },
};

module.exports = adminController;
