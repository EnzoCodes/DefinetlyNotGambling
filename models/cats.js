
module.exports = function(sequelize, DataTypes) {
    
        var Cat = sequelize.define("Cat", {
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1,140]}
          },
          house: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1,140]}
          },
          tier: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1,140]}
          }
        }, {
          timestamps:false
        });
    
    //   Item.associate = function(models) {
    //     // in a many-to-many relationship, where an author can belong to many posts and vice versa, we will actually need a third table to store all of the possibilities. the "through" property will create that third table for us.
    //     Item.belongsToMany(models.User, {
    //       through: "user2items"
    //     });
    //   };
        return Cat;
      };