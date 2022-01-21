'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Reviews',
      [
        {
          listingId: 1,
          userId: 1,
          review: 'Enjoyed my stay here!',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};
