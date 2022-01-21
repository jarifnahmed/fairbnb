'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Listing, { foreignKey: 'listingId' });
      Review.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Review.init(
    {
      listingId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      review: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );
  // Review.associate = function(models) {
  //   // associations can be defined here
  // };
  return Review;
};
