const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authCookie = require('../middlewares/authenticateUserWithCookie')
const avatar = require('../middlewares/processAvatar');

// Routes GET
router.get("/login", userController.getLogin);
router.get("/register", userController.getRegister);
router.get('/profile',userController.getProfile)

// Routes POST
router.post('/login', authCookie.authenticateUser ,userController.login);
router.post("/register", avatar.single("avatar"), userController.register);
router.post('/logOut', avatar.single("avatar"),userController.logOut)  

//Routes Put
router.put('/profile', avatar.single('avatar') , userController.editProfile)

module.exports = router;