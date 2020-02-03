module.exports = (sequelize, DataType) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      firstname: {
        type: DataType.STRING
      },
      lastname: {
        type: DataType.STRING
      },
      phone: {
        type: DataType.STRING
      },
      email: {
        type: DataType.STRING
      },
      password: {
        type: DataType.STRING
      },
      address: {
        type: DataType.STRING
      },
      district: {
        type: DataType.STRING
      },
      province: {
        type: DataType.STRING
      },
      user_image: {
        type: DataType.STRING
      },
      balance: {
        defaultValue: 10000,
        type: DataType.INTEGER
      },
      role: {
        defaultValue: "USER",
        type: DataType.ENUM("ADMIN", "USER")
      },
      star: {
        defaultValue: 0,
        type: DataType.INTEGER
      },
      count: {
        defaultValue: 0,
        type:DataType.INTEGER
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  User.associate = models => {
    User.hasMany(models.takecareof, {
      foreignKey: {
        name: "user_id",
      }
    });
    User.hasMany(models.serviceof, {
      foreignKey: {
        name: "user_id",
      }
    });
    
    User.hasMany(models.matchjob, {
      as: "providerId",
      foreignKey: {
        name: "provider_id",
      }
    });

    User.hasMany(models.customer, {
      as: "customer",
      foreignKey: {
        name: "customer_id",
      }
    });
  };

  return User;
};
