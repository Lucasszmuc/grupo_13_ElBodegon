const cssFiles = require('../controllers/cssController');
const pageCssMapping = require('./pageCssMapping');

const adminController = {
  editProduct: (req, res) => {
    const currentPage = 'editProduct'; 
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/editProduct", {cssFiles , cssIndex});
  },
  createProduct: (req, res) => {
    const currentPage = 'createProduct'; 
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/createProduct", {cssFiles , cssIndex});
  },
};

module.exports = adminController;
