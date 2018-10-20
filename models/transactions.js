module.exports = (sequelize, DataTypes) => {

    const transactions = sequelize.define("transactions", {
        // Giving the Author model a name of type STRING
        paid_to: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        note: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shared_with: {
            type: DataTypes.STRING,
            allowNull: true
        },
        foreignkey: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    // transaction.associate = function(models) { Associating Author with Posts When
    // an Author is deleted, also delete any associated Posts
    // users.hasMany(models.transaction, {    onDelete: "cascade"  }); };
    return transactions;
}