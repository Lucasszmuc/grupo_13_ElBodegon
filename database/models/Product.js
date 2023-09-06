module.exports = (sequelize, DataTypes) => {
    try {
        var Product = sequelize.define("Product",
        {   
            id : {
                type:DataTypes.INTEGER,
                primaryKey: true ,
                autoIncrement:true
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
          },
            {
                tableName: 'product',
                timestamps: false,
            });

    } catch (error) {
        console.log(error)
    }

    return Product;
}


