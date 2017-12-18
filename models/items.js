
module.exports = function(sequelize, DataTypes) {
    
        var Item = sequelize.define("Item", {
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
            validate: { len: [1,500]}
          }, 
          houseImage: {
            type: DataTypes.STRING
          }
        }, {
          timestamps:false
        });
    
      Item.associate = function(models) {
      
        Item.belongsToMany(models.User, {
          through: "user2items"
        });
      };
        return Item;
      };