
module.exports = function(sequelize, DataTypes) {
    var Monsters = sequelize.define("Monster3", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [1,140]}
      },
      movie: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [1,140]}
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [1,140]}
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [1,140]}
      },
      tier: {
        type: DataTypes.BOOLEAN,
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
    return Monsters;
  };