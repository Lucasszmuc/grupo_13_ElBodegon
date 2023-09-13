module.exports = (sequelize, DataTypes) => {
    const alias = "Product";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        discount: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }
    const config = {
        tableName: 'product',
        timestamps: false,
    }
    const Product = sequelize.define(alias, cols, config)


    Product.associate = function (models) {

        Product.belongsToMany(models.User, {
            as: 'user',
            through: 'cart',
            foriegnKey: 'product_id',
            otherKey: 'user_id',
            timestamps: false
        })

    }

    return Product;
}


