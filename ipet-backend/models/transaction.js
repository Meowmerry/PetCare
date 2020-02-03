module.exports = (sequelize, DataType) => {
    const Transaction = sequelize.define("transaction", {
        customer_Name: {
            type: DataType.STRING
        },
        provider_Name: {
            type: DataType.STRING
        },
        status: {
            type: DataType.ENUM("Accept", "Complete")
        },
        card_Id: {
            type: DataType.STRING
        }
        
    })
    
    return Transaction
}