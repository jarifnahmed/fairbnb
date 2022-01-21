'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    static associate(models) {
      Listing.hasMany(models.Review, {
        foreignKey: 'listingId',
        onDelete: 'CASCADE',
        hooks: true,
      });
      Listing.hasMany(models.Image, {
        foreignKey: 'listingId',
        onDelete: 'CASCADE',
        hooks: true,
      });
      Listing.hasMany(models.Booking, {
        foreignKey: 'listingId',
        onDelete: 'CASCADE',
        hooks: true,
      });
      Listing.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Listing.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      imageUrl: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Listing',
    }
  );
  // Listing.associate = function(models) {
  //   // associations can be defined here
  // };
  return Listing;
};
