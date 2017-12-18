
module.exports = function(sequelize, DataTypes) {
    
        var user2items = sequelize.define("user2items", {}, {
          timestamps:false
        });
    
      // Item.associate = function(models) {
      
      //   Item.belongsToMany(models.User, {
      //     through: "user2items"
      //   });
      // };
        return user2items;
      };