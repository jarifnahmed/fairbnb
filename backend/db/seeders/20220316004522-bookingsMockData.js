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
      'bookings',
      [
        {
          userId: 1,
          listingId: 5,
          startDate: '2022-12-01',
          endDate: '2022-12-05',
          days: 4,
          total: 480,
          listingFirstImageUrl:
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602519/fairbnb-SeedData/Close%20to%20Plaza/DJI_0595-Edit_naq19o_jdlajo.jpg',
          listingPricePerNight: 120,
          listingCity: 'Charlotte, NC, USA',
          listingLat: 35.227085,
          listingLng: -80.843124,
        },

        {
          userId: 1,
          listingId: 9,
          startDate: '2023-05-01',
          endDate: '2023-05-05',
          days: 14,
          total: 980,
          listingFirstImageUrl:
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647606025/fairbnb-SeedData/Stone%20Mansion/100987825-121017_EJ_stone_mansion_0014r_uobkj6.jpg',
          listingPricePerNight: 70,
          listingCity: 'Milwaukee, WI, USA',
          listingLat: 43.038902,
          listingLng: -87.906471,
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
    await queryInterface.bulkDelete('bookings', null, {});
  },
};
