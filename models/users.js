module.exports = function(sequelize, DataTypes) {

    var users = sequelize.define("users", {
      // Giving the Author model a name of type STRING
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }

    });
  
    return users;
  };