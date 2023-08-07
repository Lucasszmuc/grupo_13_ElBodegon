const cssFiles = require('../controllers/cssController');
const pageCssMapping = require('./pageCssMapping');
const productModel = require("../models/productModels");

const mainController = {
  index: (req, res) => {
    const currentPage = 'index'; 
    const cssIndex = pageCssMapping[currentPage];
    res.render("./main/index", {cssFiles , cssIndex});
  },
};

module.exports = mainController;
