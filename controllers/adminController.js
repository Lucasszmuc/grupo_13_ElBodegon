const adminController = {
  editProduct: (req, res) => {
    res.render("editProduct");
  },
  createProduct: (req, res) => {
    res.render("createProduct");
  },
};

module.exports = adminController;
