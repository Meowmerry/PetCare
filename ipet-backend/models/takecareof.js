module.exports = (sequelize, DataType) => {
	const TakeCareOf = sequelize.define(
		"takecareof",
		{
			id: {
				type: DataType.UUID,
				defaultValue: DataType.UUIDV4,
				allowNull: false,
				primaryKey: true,
				unique: true
			},
			// takeCareType: {
			// 	type: DataType.STRING
			// },
		},
		{
			freezeTableName: true,
			timestamps: false
		}
	);

	TakeCareOf.associate = models => {
		TakeCareOf.belongsTo(models.user, {
			foreignKey: {
				name: "user_id",
			}
		});
		TakeCareOf.belongsTo(models.animal, {
            foreignKey: {
              name: "animal_id",
            }
          });
	};

	return TakeCareOf;
};
