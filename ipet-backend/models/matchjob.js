module.exports = (sequelize, DataType) => {
	const MatchJob = sequelize.define(
		"matchjob",
		{
			id: {
				type: DataType.UUID,
				defaultValue: DataType.UUIDV4,
				allowNull: false,
				primaryKey: true,
				unique: true
			},
			date: {
				type: DataType.STRING
			},
			rate: {
				type: DataType.INTEGER
			}
		},
		{
			freezeTableName: true,
			timestamps: false
		}
	);

	MatchJob.associate = models => {
		MatchJob.hasMany(models.customer, {
			as: "customers",
			foreignKey: {
				name: "matchjob_id",
			}
		});
		MatchJob.belongsTo(models.user, {
			as: "providerId",
			foreignKey: {
				name: "provider_id",
			}
		});
		
	};

	return MatchJob;
};
