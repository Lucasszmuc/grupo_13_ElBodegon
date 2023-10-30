module.exports = (sequelize, DataTypes) => {
    try {
        var Cart = sequelize.define("Cart",
            {
                user_id: {
                    type: {
                        type: DataTypes.INTEGER
                    },
                    references: {
                        model: 'user',
                        key: 'id'
                    }
                },
                product_id: {
                    type: {
                        type: DataTypes.INTEGER
                    },
                    references: {
                        model: 'product',
                        key: 'id'
                    }
                },
                product_name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    references: {
                        model: 'product',
                        key: 'name'
                    }
                },
                price: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'product',
                        key: 'price'
                    }
                }
            },
            {
                tableName: 'cart',
                timestamps: false,
            });

    } catch (error) {
        console.log(error)
    }

    return Cart;
}
