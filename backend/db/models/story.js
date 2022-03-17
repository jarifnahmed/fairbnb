'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Story.belongsTo(models.User, { foreignKey: 'authorId' });
      Story.hasMany(models.Comment, {
        foreignKey: 'storyId',
        onDelete: 'CASCADE',
        hooks: true,
      });
      Story.hasMany(models.Booking, {
        foreignKey: 'storyId',
        onDelete: 'CASCADE',
        hooks: true,
      });
    }
  }
  Story.init(
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
      modelName: 'Story',
    }
  );
  return Story;
};
