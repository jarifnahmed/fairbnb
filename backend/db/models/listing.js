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
      Listing.belongsTo(models.User, { foreignKey: 'authorId' });
    }
  }
  Listing.init(
    {
      authorId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      subtitle: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      imageUrl: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      body: {
        allowNull: false,
        type: DataTypes.TEXT,
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
