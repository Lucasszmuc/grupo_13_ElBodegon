const cssFiles = require('../controllers/cssController');

const adminController = {
  editProduct: (req, res) => {
    res.render("./products/editProduct", {cssFiles});
  },
  createProduct: (req, res) => {
    res.render("./products/createProduct", {cssFiles});
  },
};

module.exports = adminController;
