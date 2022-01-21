'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.Listing, { foreignKey: 'listingId' });
      Booking.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Booking.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      listingId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      startDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      endDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Booking',
    }
  );
  // Booking.associate = function(models) {
  //   // associations can be defined here
  // };
  return Booking;
};
