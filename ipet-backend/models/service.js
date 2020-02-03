module.exports = (sequelize, DataType) => {
	const Service = sequelize.define(
		"service", {
			service: {
				type: DataType.STRING
			},
			imgservice_url: {
				type: DataType.STRING
			},
		}, {
			freezeTableName: true,
			timestamps: false
		}
	);

	// Service.associate = models => {
	// 	Service.belongsTo(models.serviceof,{ foreignKey:'serviceof_id'})
	// }
	return Service;
};