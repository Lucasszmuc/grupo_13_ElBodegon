module.exports = (sequelize, DataTypes) => {
    const alias = 'User'
    const cols = {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }
    const config = {
        tableName: 'user',
        timestamps: false,
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = function (models) {
        User.belongsToMany(models.Product, {
            as: 'product',
            through: 'cart',
            foreignKey: 'user_id', 
            otherKey: 'product_id',
            timestamps: false
        })
    }

    return User;
}