'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users' },
        onDelete: 'CASCADE',
      },
      listingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'listings' },
        onDelete: 'CASCADE',
      },
      startDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      days: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      listingFirstImageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      listingPricePerNight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      listingCity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      listingLat: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      listingLng: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bookings');
  },
};
