'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Bookings', [
      {userId: 1, storyId: 2, startDate: '2022-04-01', endDate: '2022-04-05', days: 4, total: 480, listingFirstImageUrl: 'https://i.pinimg.com/originals/76/59/8b/76598b322860535e0a7cccb6f821c215.jpg', listingPricePerNight: 120, listingCity: 'Charlotte, NC, USA', listingLat: 35.227085, listingLng: -80.843124,},
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Bookings', null, {});
  }
};
