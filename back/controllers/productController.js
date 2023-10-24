const cssFiles = require("../controllers/cssController");
const pageCssMapping = require("./pageCssMapping");
const { Product, Cart, Category } = require('../database/models')
const { validationResult } = require("express-validator");

const productController = {
  getProductDetail: async (req, res) => {
    const currentPage = "productDetail";
    const cssIndex = pageCssMapping[currentPage];
    const productId = req.params.id;
    try {
      const selectedProduct = await Product.findByPk(productId, { raw: true });
      res.render("./products/productDetail", { cssFiles, cssIndex, product: selectedProduct, user: req.session.user });
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error interno del servidor");
    }
  },
  showMenu: async (req, res) => {
    const currentPage = "menu";
    const cssIndex = pageCssMapping[currentPage];
    try {
      const products = await Product.findAll({
        raw: true,
        include: [
          {
            model: Category, 
            as: 'category', 
            attributes: ['name'], 
          },
        ],
        nest: true
      });
    
      
      return res.render("./products/menu", {
        cssFiles,
        cssIndex,
        products: products,
        user: req.session.user,
      });
      
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error interno del servidor");
    }
  },
  showRecetas: (req, res) => {
    const currentPage = "recetas";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/recetas", { cssFiles, cssIndex, user: req.session.user });
  },
  showCart: async (req, res) => {
    const currentPage = "carrito";
    const cssIndex = pageCssMapping[currentPage];
    try {
      const products = await Cart.findAll({
        where:{
          user_id : req.session.user.id
        },
        raw: true ,
        nest: true
      });
      res.render("./products/carrito", { cssFiles, cssIndex,  product : products , user: req.session.user });   
    } catch (error) {
      console.log(error)
    }
  },
  getEditProduct: async (req, res) => {
    const currentPage = "editProduct";
    const cssIndex = pageCssMapping[currentPage];
    const productId = req.params.id;
    const selectedProduct = await Product.findByPk(productId, { raw: true });

    res.render("./products/editProduct", {
      cssFiles,
      cssIndex,
      product: selectedProduct,
      user: req.session.user
    });
  },
  getCreateProduct: (req, res) => {
    const currentPage = "createProduct";
    const cssIndex = pageCssMapping[currentPage];
    res.render("./products/createProduct", { cssFiles, cssIndex, user: req.session.user });
  },
  createProduct: async (req, res) => {
    const currentPage = "createProduct";
    const cssIndex = pageCssMapping[currentPage];
    try {
      
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.render('products/createProduct',{ 
          errors: errors.array(),
          old: req.body,
          cssFiles,
          cssIndex
        });
      }

     
      const { name, price, image, description, discount, code } = req.body;

      let category = 0;

    switch (req.body.category) {
      case 'Carnes':
        category = 1;
        break;
      case 'Bebidas':
        category = 2;
        break;
      case 'Ensaladas':
        category = 3;
        break;
      case 'Milanesas':
        category = 4;
        break;
      case 'Pescados':
        category = 5;
        break;
      case 'Postres':
        category = 6;
        break;
      default:
        break;
    }

      const newProduct = await Product.create({
        name: req.body.name,
        price: req.body.price,
        image: req.file.filename,
        category_id: category,
        description,
        discount,
        code,
      });

      return res.redirect('/product/' + newProduct.dataValues.id);
    } catch (error) {
      console.log(error);
      return res.redirect('/error?' + error);
    }
  },

  editProduct: async (req, res) => {
    const currentPage = "editProduct";
  const cssIndex = pageCssMapping[currentPage];
  const productId = req.params.id;
  try {
    // Validar los campos
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const selectedProduct = await Product.findByPk(productId, { raw: true });
      return res.render("products/editProduct", { 
        errors: errors.array(),
        product: selectedProduct, // Agrega el producto aquí
        cssFiles,
        cssIndex
      });
    }
        

      // Procesar la edición del producto
      const { id } = req.params;
      const{description , category_id, name, price} = req.body
      const updatedProduct = {
        id: Number(id),
        image: '',
        name: name,
        description: description,
        price: price
      };

      if (req.file) {
        updatedProduct.image = req.file.filename;
      }

      if (updatedProduct.image === '') {
        let imagen = await Product.findOne({
          where: {
            id: Number(id),
          },
        });

        updatedProduct.image = imagen.image;
      }

      console.log(updatedProduct)

      await Product.update(updatedProduct, {
        where: {
          id: Number(id),
        },
      });

      return res.redirect('/product/' + updatedProduct.id);
    } catch (error) {
      return res.redirect('/product/' + productId + '/error?' + error);
    }
  },
  deleteProduct: async (req, res) => {
    try {

      await Product.destroy({
        where: {
          id: req.params.id
        }
      })

      res.redirect("/");

    } catch (error) {
      console.log(error)
    }
  },
  insertProduct: async (req,res)=>{
    try {
      const product = await Cart.create ({
          user_id: req.session.user.id,
          product_id: req.body.productId,
          product_name:req.body.productName,
          price:req.body.productPrice
      }) 
      console.log(req.body)
    } catch (error) {
      console.log(error)
    }
  },
  deleteProductCart: async (req,res) =>{
    const currentPage = "carrito";
    const cssIndex = pageCssMapping[currentPage];
  try {
    const answer = await Cart.destroy({
      where : {
        id: req.params.id
      }
    });

    res.redirect('/product/carrito');

  } catch (error) {
    console.log(error)
  }
  }

};

module.exports = productController;
