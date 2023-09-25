
module.exports = (sequelize, DataTypes) => {
    try {
        var Category = sequelize.define("Category",
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                }
            },
            {
                tableName: 'category',
                timestamps: false,
            });

    } catch (error) {
        console.log(error)
    }


    Category.associate = function (models) {

        Category.hasMany(models.Product, {
            as: 'product',
            foreignKey: 'category_id',
            timestamps: false
        })

    }

    return Category;
}
