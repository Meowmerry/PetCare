module.exports = (sequelize, DataType) => {
	const Animal = sequelize.define(
		"animal", {
			animal: {
				type: DataType.STRING
			},
			imganimal_url: {
				type: DataType.STRING
			},
		}, {
			freezeTableName: true,
			timestamps: false
		}
	);

	// Animal.associate = models => {
	// 	Animal.hasMany(models.takecareof,{ foreignKey:'serviceof_id'})
	// }
	return Animal;
};