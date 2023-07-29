const cssFiles = require('../controllers/cssController');

const userController = {
    login: (req, res) => {
        res.render('./users/login', { cssFiles });
    },
    register: (req, res) => {
        res.render('./users/register', { cssFiles });
    }
};

module.exports = userController;
