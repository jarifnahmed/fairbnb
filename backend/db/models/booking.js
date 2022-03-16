'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.User, { foreignKey: 'userId' });
      Booking.belongsTo(models.Story, { foreignKey: 'storyId' });
    }
  };
  Booking.init({
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    // cost: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
