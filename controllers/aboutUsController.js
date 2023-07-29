const cssFiles = require('../controllers/cssController');
const pageCssMapping = require('./pageCssMapping');
const usController = {
    showAboutUs: (req, res) => {
        const currentPage = 'nosotros'; 
        const cssIndex = pageCssMapping[currentPage];
        res.render('./main/nosotros', {cssFiles, cssIndex});
    },
}

module.exports = usController;