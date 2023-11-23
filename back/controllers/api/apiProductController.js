const {Product} = require('../../database/models')


const apiController = {
  getProduct: async (req, res) => {
    try {
        const products = await Product.findAll();

        const response = {
            data: products,
            meta: {
                status: 201,
                path: products.baseUrl,
                quantity: products.lenght,
                query: req.query
            }
        }

        res.json(response)
    } catch (error) {
        
    }
   
  },
  getProductDetail: async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                id: req.params.id
            },
            raw: true
        });
      

        const response = {
            data: product,
            meta: {
                status: 201,
            }
        }

        res.json(response)
    } catch (error) {
        console.log(error)
    }

},
};

module.exports = apiController;
