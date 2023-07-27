const adminController = {
  editProduct: (req, res) => {
    res.render("./products/editProduct");
  },
  createProduct: (req, res) => {
    res.render("./products/createProduct");
  },
};

module.exports = adminController;
