
const productController = {
    getProductDetail: (req, res) => {
        res.render('productoDetail')
    },
    showMenu: (req, res) => {
        res.render('menu');
    },
    showRecetas: (req, res) => {
        res.render('recetas');
    },
    showCarrito: (req, res) => {
        res.render('carrito');
    }
}

module.exports = productController;