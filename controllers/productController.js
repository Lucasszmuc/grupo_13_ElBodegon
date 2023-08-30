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

    res.render("./products/menu", { cssFiles, cssIndex, products : products, user: req.session.user });
  },
  showRecetas: (req, res) => {
    const currentPage = "recetas";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/recetas", { cssFiles, cssIndex , user: req.session.user });
  },
  showCarrito: (req, res) => {
    const currentPage = "carrito";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/carrito", { cssFiles, cssIndex , user: req.session.user });
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
      user: req.session.user
    });
  },
  getCreateProduct: (req, res) => {
    const currentPage = "createProduct";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/createProduct", { cssFiles, cssIndex , user: req.session.user});
  },
  createProduct: (req, res) => {

    const newProduct = {
      name: req.body.name,
      price: req.body.price,
      image: req.file.filename,
      category: req.body.category,
      description: req.body.description || "",
      discount: req.body.discount
    };

    const createdProduct = productModel.createProduct(newProduct);
   
    res.redirect("/producto/" + createdProduct.id);
  },

  editProduct: (req, res) => {

    let updatedProduct = {
      id: Number(req.params.id),
      image: ''
    };


    updatedProduct = {
      ...updatedProduct,
      ...req.body,
    };

    if (req.file) {
      updatedProduct.image = req.file.filename;
    }

    if(updatedProduct.image === ''){
      let imagen = productModel.findById(updatedProduct.id);
      updatedProduct.image = imagen.image;
    }

    productModel.updateProduct(updatedProduct);

    res.redirect("/producto/" + updatedProduct.id);
  },
  deleteProduct: (req, res) => {

    productModel.deleteProduct(Number(req.params.id));

    res.redirect("/");
  },
};

module.exports = productController;
