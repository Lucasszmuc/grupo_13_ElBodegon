const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const adminController = require("../controllers/adminController");

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img'))
    },

    filename: (req, file, cb) => {
        const newFileName = 'product-'+ Date.now() + path.extname(file.originalname);
        cb(null, newFileName)
    }

})

const upload = multer({ storage })

//GET
router.get("/editProduct/:id", adminController.getEditProduct);
router.get("/createProduct", adminController.getCreateProduct);

//POST
router.post("/createProduct", upload.single('image'),adminController.createProduct);

//PUT
router.put('/editProduct', adminController.editProduct)

module.exports = router;
