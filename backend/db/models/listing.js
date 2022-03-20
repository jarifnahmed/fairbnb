'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Listing.belongsTo(models.User, { foreignKey: 'authorId' });
      Listing.hasMany(models.Comment, {
        foreignKey: 'listingId',
        onDelete: 'CASCADE',
        hooks: true,
      });
      Listing.hasMany(models.Booking, {
        foreignKey: 'listingId',
        onDelete: 'CASCADE',
        hooks: true,
      });
    }
  }
  Listing.init(
    {
      authorId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      propertyType: DataTypes.STRING,
      city: DataTypes.STRING,
      lat: DataTypes.DECIMAL,
      lng: DataTypes.DECIMAL,
      price: DataTypes.INTEGER,
      imageUrl: DataTypes.ARRAY(DataTypes.STRING),
      body: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Listing',
    }
  );
  return Listing;
};
