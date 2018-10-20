module.exports = (sequelize, DataTypes) => {

    const users = sequelize.define("users", {
      // Giving the Author model a name of type STRING
        userFirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userLastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userPhone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userAddress1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userAddress2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        userZipCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        userType: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return users;
  };