'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Images',
      [
        {
          listingId: 1,
          url: 'https://cdn.vox-cdn.com/thumbor/gBZgtN7QoIIeR6U1giHpBrNCZUQ=/0x0:1200x800/1200x0/filters:focal(0x0:1200x800):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10193825/305507093.jpg',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Images', null, {});
  },
};
