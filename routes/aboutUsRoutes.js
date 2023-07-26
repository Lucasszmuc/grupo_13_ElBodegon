const express = require('express');
const router = express.Router();
const aboutUsController = require('../controllers/aboutUsController');

router.get('/nosotros', aboutUsController.showAboutUs);

module.exports = router;
