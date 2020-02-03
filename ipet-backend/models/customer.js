module.exports = (sequelize, DataType) => {
	const Customer = sequelize.define(
		"customer", {
			id: {
				type: DataType.UUID,
				defaultValue: DataType.UUIDV4,
				allowNull: false,
				primaryKey: true,
				unique: true
			},
			status: {
				type: DataType.ENUM("poke", "accept", "finish", "complete", "end")
			},
			choosePet: {
				type: DataType.STRING
			},
			amount: {
				type: DataType.INTEGER
			},
			chooseService: {
				type: DataType.STRING
			},
			toTime: {
				type: DataType.STRING
			},
			fromTime: {
				type: DataType.STRING
			},
			price: {
				type: DataType.INTEGER
			},
			detail: {
				type: DataType.STRING
			}
		},
		{
			freezeTableName: true,
			timestamps: false
		}
	);

	Customer.associate = models => {
		Customer.belongsTo(models.matchjob, {
            as: "customers",
            foreignKey: {
                name: "matchjob_id",
            }
        })
        
        Customer.belongsTo(models.user, {
            as: "customer",
            foreignKey: {
                name: "customer_id",
              }
        })

		Customer.belongsTo(models.user, {
			as: "userId",
			foreignKey: {
				name: "customer_id",
			}
		})

		
	}

	return Customer;
};