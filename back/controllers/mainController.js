const cssFiles = require("../controllers/cssController");
const pageCssMapping = require("./pageCssMapping");
const { Product } = require("../database/models");

const mainController = {
  index: async (req, res) => {
    try {
      const currentPage = "index";
      const cssIndex = pageCssMapping[currentPage];
      const products = await Product.findAll({
        raw: true,
        nest: true,
        limit: 8
      });
      
      res.render("./main/index", {
        cssFiles,
        cssIndex,
        user: req.session.user,
        products: products,
      });
    } catch (error) {
      console.log(error);
    }
  },
  showAboutUs: (req, res) => {
    const currentPage = "nosotros";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./main/nosotros", {
      cssFiles,
      cssIndex,
      user: req.session.user,
    });
  },
};

module.exports = mainController;
