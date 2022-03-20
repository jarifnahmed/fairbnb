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
    await queryInterface.bulkInsert(
      'Bookings',
      [
        {
          userId: 1,
          listingId: 5,
          startDate: '2022-04-01',
          endDate: '2022-04-05',
          days: 4,
          total: 480,
          listingFirstImageUrl:
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602519/fairbnb-SeedData/Close%20to%20Plaza/DJI_0595-Edit_naq19o_jdlajo.jpg',
          listingPricePerNight: 120,
          listingCity: 'Charlotte, NC, USA',
          listingLat: 35.227085,
          listingLng: -80.843124,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Bookings', null, {});
  },
};
