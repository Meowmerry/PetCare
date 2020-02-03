module.exports = (sequelize, DataType) => {
	const ServiceOf = sequelize.define(
		"serviceof",
		{
			id: {
				type: DataType.UUID,
				defaultValue: DataType.UUIDV4,
				allowNull: false,
				primaryKey: true,
				unique: true
			},
			// serviceType: {
			// 	type: DataType.STRING
			// },
		},
		{
			freezeTableName: true,
			timestamps: false
		}
	);

	ServiceOf.associate = models => {
		ServiceOf.belongsTo(models.user, {
			foreignKey: {
				name: "user_id",
			}
		});
		ServiceOf.belongsTo(models.service, {
            foreignKey: {
              name: "service_id",
            }
          });
	};

	return ServiceOf;
};
