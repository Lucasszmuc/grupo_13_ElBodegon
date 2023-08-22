const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const avatar = require('../middlewares/processAvatar');

// Routes GET
router.get("/login", userController.getLogin);
router.get("/register", userController.getRegister);
router.get('/profile', userController.getProfile)

// Routes POST
router.post('/login',userController.login);
router.post("/register", avatar.single("avatar"), userController.register);
router.post('/logOut', userController.logOut)  

module.exports = router;