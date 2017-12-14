module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len:[1, 25] }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len:[1, 25] }
        }
        identity: {
            type: DataTypes.STRING,
            defaultValue: "1234512345"
        }
    });
    return User;
};
