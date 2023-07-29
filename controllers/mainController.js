const cssFiles = require('../controllers/cssController');

const mainController = {
  index: (req, res) => {
    res.render("./main/index", {cssFiles});
  },
};

module.exports = mainController;
