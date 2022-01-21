'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Listing, { foreignKey: 'listingId' });
    }
  }
  Image.init(
    {
      listingId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Image',
    }
  );
  // Image.associate = function(models) {
  //   // associations can be defined here
  // };
  return Image;
};
