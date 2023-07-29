const cssFiles = require('./cssController');
const pageCssMapping = require('./pageCssMapping');

const userController = {
    login: (req, res) => {
        const currentPage = 'login'; 
        const cssIndex = pageCssMapping[currentPage]; 
        res.render('./users/login', { cssFiles, cssIndex });
    },
    register: (req, res) => {
        const currentPage = 'register'; 
        const cssIndex = pageCssMapping[currentPage]; 
        res.render('./users/register', { cssFiles, cssIndex });
    }
};

module.exports = userController;
