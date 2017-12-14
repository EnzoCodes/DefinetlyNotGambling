module.exports = function(sequelize, DataTypes){
	var popsicle = sequelize.define("popsicle", {
		name: {
			type:DataTypes.STRING,
			allowNull:false
		},
		image: {
			type:DataTypes.STRING,
			allowNull:false
		},
		rarity: {
			type:DataTypes.STRING,
			allowNull:false
		},
		value:{
			type:DataTypes.INTEGER,
			allowNull:false
		}
	});

	return popsicle;
}