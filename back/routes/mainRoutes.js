const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/nosotros', mainController.showAboutUs);

module.exports = router;