module.exports = (sequelize, DataTypes) => {

    const schedules = sequelize.define("schedules", {
        scheduledDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        scheduledTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userID: {
            type: DataTypes.STRING,
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
    });
    return schedules;
  };