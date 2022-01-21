'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Listings',
      [
        {
          userId: 1,
          name: 'Bed-Stuy Apartment',
          address: '1234 Whiting Ave',
          city: 'New York',
          state: 'NY',
          country: 'USA',
          price: '150',
          description: 'Affordable apartment in Brooklyn with a great view!',
          imageUrl:
            'https://cdn.vox-cdn.com/thumbor/wr36UvgMmAov36FoIN_BIyXcaOE=/0x0:1199x800/1200x800/filters:focal(505x305:695x495)/cdn.vox-cdn.com/uploads/chorus_image/image/58640751/305507067.0.jpg',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Listings', null, {});
  },
};
