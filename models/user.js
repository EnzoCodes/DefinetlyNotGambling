module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len:[1, 25] }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len:[1, 25] }
        },
        coin_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100
        },
        identity: {
            type: DataTypes.STRING,
            defaultValue: "1234512345"
        }
    });

    User.associate = function(models) {
        User.belongsToMany(models.Item, {
            through: "user2items"
        });
    };

    return User;
};
