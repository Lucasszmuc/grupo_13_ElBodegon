const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authCookie = require('../middlewares/authenticateUser')
const avatar = require('../middlewares/processAvatar');
const validateRegister = require('../middlewares/validateRegister');
const validateLogin = require('../middlewares/validateLogin');

// Routes GET
router.get("/login", userController.getLogin);
router.get("/register",userController.getRegister);
router.get('/profile',userController.getProfile)

// Routes POST
router.post('/login', authCookie, validateLogin, userController.login);
router.post("/register", avatar.single("avatar"), validateRegister, userController.register);
router.post('/logOut', avatar.single("avatar"),userController.logOut)  

//Routes Put
router.put('/profile', avatar.single('avatar') , userController.editProfile)

//Routes Delete
router.delete('/deleteUser/:id', userController.deleteProfile)

module.exports = router;