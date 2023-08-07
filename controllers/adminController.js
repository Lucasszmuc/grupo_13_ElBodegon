const cssFiles = require("../controllers/cssController");
const pageCssMapping = require("./pageCssMapping");
const productModel = require('../models/productModels');

const adminController = {
  getEditProduct: (req, res) => {
    const currentPage = "editProduct";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/editProduct", { cssFiles, cssIndex });
  },
  getCreateProduct: (req, res) => {
    const currentPage = "createProduct";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/createProduct", { cssFiles, cssIndex });
  },
  createProduct: (req,res) =>{
    
    const filenames = req.files.map(file => file.filename);

    const newProduct = {
      name: req.body.name,
      price: req.body.price,
      imagen: filenames
  }

  const createdProduct = productModel.createProduct(newProduct);

  res.redirect('/producto/' + createdProduct.id);
  }
};

module.exports = adminController;
