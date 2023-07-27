
const productController = {
    getProductDetail: (req, res) => {
        res.render('./products/productoDetail')
    },
    showMenu: (req, res) => {
        res.render('./products/menu');
    },
    showRecetas: (req, res) => {
        res.render('./products/recetas');
    },
    showCarrito: (req, res) => {
        res.render('./products/carrito');
    }
}

module.exports = productController;