const { Product, Category } = require('../../../database/models');

const apiProductController = {
    getProducts: async (req, res) => {
        try {
          const products = await Product.findAll({
            include: [{ model: Category, as: 'category', attributes: ['name'] }],
          });
      
          const countByCategory = {};
      
          products.forEach((product) => {
            const categoryName = product.category.name;
            if (!countByCategory[categoryName]) {
              countByCategory[categoryName] = 1;
            } else {
              countByCategory[categoryName]++;
            }
          });
      
          const response = {
            count: products.length,
            countByCategory,
            products: products.map((product) => ({
              id: product.id,
              name: product.name,
              description: product.description,
              image: `/public/img/products/${product.image}`,
              categories: [
                {
                  name: product.category.name,
                },
              ],
              detail: `/api/products/${product.id}`,
            })),
          };
      
          res.json(response);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Hubo un error en el servidor' });
        }
      }
      ,

  getProductDetail: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id, {
        include: [{ model: Category, as: 'category' }],
      });
      console.log(product)

      if (!product) {
        res.status(404).json({ error: 'Producto no encontrado' });
        return;
      }

      const response = {
        ...product.toJSON(),
        imageUrl: `/public/img/products/${product.image}`,
      };

      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un error en el servidor' });
    }
  },
};

module.exports = apiProductController;

