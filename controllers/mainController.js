const cssFiles = require('../controllers/cssController');
const pageCssMapping = require('./pageCssMapping');


const mainController = {
  index: (req, res) => {
    const currentPage = 'index'; 
    const cssIndex = pageCssMapping[currentPage];
    res.render("./main/index", {cssFiles , cssIndex , user: req.session.user });
  },
  showAboutUs: (req, res) => {
    const currentPage = 'nosotros'; 
    const cssIndex = pageCssMapping[currentPage];
    res.render('./main/nosotros', {cssFiles, cssIndex, user: req.session.user });
},
};

module.exports = mainController;
