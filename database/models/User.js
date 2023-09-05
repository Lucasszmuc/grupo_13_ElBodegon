module.exports = (sequelize, DataTypes) => {
    try {
        var User = sequelize.define("User",
        {   
            id : {
                type:DataTypes.INTEGER(10),
                primaryKey: true ,
                autoIncrement:true
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
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
                allowNull: false
            }
          },
            {
                tableName: 'user',
                timestamps: false,
            });

    } catch (error) {
        console.log(error)
    }

    return User;
}
