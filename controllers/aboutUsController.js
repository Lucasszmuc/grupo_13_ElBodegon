const cssFiles = require('../controllers/cssController');
const usController = {
    showAboutUs: (req, res) => {
        res.render('./main/nosotros', {cssFiles});
    },
}

module.exports = usController;