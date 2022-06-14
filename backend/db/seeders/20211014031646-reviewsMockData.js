'use strict';

const { default: faker } = require('@faker-js/faker');

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
      'Reviews',
      [
        { userId: 1, listingId: 4, body: faker.lorem.words(5) },
        { userId: 2, listingId: 1, body: faker.lorem.words(5) },
        { userId: 3, listingId: 2, body: faker.lorem.words(5) },
        { userId: 2, listingId: 2, body: faker.lorem.words(5) },
        { userId: 3, listingId: 8, body: faker.lorem.words(5) },
        { userId: 4, listingId: 8, body: faker.lorem.words(5) },
        { userId: 5, listingId: 8, body: faker.lorem.words(5) },
        { userId: 6, listingId: 8, body: faker.lorem.words(5) },
        { userId: 7, listingId: 8, body: faker.lorem.words(5) },
        { userId: 4, listingId: 9, body: faker.lorem.words(5) },
        { userId: 5, listingId: 9, body: faker.lorem.words(5) },
        { userId: 6, listingId: 9, body: faker.lorem.words(5) },
        { userId: 7, listingId: 9, body: faker.lorem.words(5) },
        { userId: 8, listingId: 9, body: faker.lorem.words(5) },
        { userId: 5, listingId: 10, body: faker.lorem.words(5) },
        { userId: 6, listingId: 10, body: faker.lorem.words(5) },
        { userId: 7, listingId: 10, body: faker.lorem.words(5) },
        { userId: 8, listingId: 10, body: faker.lorem.words(5) },
        { userId: 6, listingId: 11, body: faker.lorem.words(5) },
        { userId: 7, listingId: 11, body: faker.lorem.words(5) },
        { userId: 8, listingId: 11, body: faker.lorem.words(5) },
        { userId: 9, listingId: 11, body: faker.lorem.words(5) },
        { userId: 3, listingId: 12, body: faker.lorem.words(5) },
        { userId: 2, listingId: 12, body: faker.lorem.words(5) },
        { userId: 4, listingId: 12, body: faker.lorem.words(5) },
        { userId: 3, listingId: 13, body: faker.lorem.words(5) },
        { userId: 4, listingId: 13, body: faker.lorem.words(5) },
        { userId: 5, listingId: 13, body: faker.lorem.words(5) },
        { userId: 7, listingId: 13, body: faker.lorem.words(5) },
        { userId: 8, listingId: 13, body: faker.lorem.words(5) },
        { userId: 8, listingId: 14, body: faker.lorem.words(5) },
        { userId: 6, listingId: 14, body: faker.lorem.words(5) },
        { userId: 5, listingId: 14, body: faker.lorem.words(5) },
        { userId: 4, listingId: 14, body: faker.lorem.words(5) },
        { userId: 3, listingId: 14, body: faker.lorem.words(5) },
        { userId: 10, listingId: 15, body: faker.lorem.words(5) },
        { userId: 11, listingId: 15, body: faker.lorem.words(5) },
        { userId: 12, listingId: 15, body: faker.lorem.words(5) },
        { userId: 13, listingId: 15, body: faker.lorem.words(5) },
        { userId: 14, listingId: 15, body: faker.lorem.words(5) },
        { userId: 15, listingId: 15, body: faker.lorem.words(5) },
        { userId: 16, listingId: 16, body: faker.lorem.words(5) },
        { userId: 17, listingId: 16, body: faker.lorem.words(5) },
        { userId: 18, listingId: 16, body: faker.lorem.words(5) },
        { userId: 19, listingId: 16, body: faker.lorem.words(5) },
        { userId: 19, listingId: 17, body: faker.lorem.words(5) },
        { userId: 20, listingId: 17, body: faker.lorem.words(5) },
        { userId: 18, listingId: 17, body: faker.lorem.words(5) },
        { userId: 17, listingId: 17, body: faker.lorem.words(5) },
        { userId: 16, listingId: 17, body: faker.lorem.words(5) },
        { userId: 16, listingId: 18, body: faker.lorem.words(5) },
        { userId: 15, listingId: 18, body: faker.lorem.words(5) },
        { userId: 14, listingId: 18, body: faker.lorem.words(5) },
        { userId: 13, listingId: 18, body: faker.lorem.words(5) },
        { userId: 12, listingId: 18, body: faker.lorem.words(5) },
        { userId: 12, listingId: 19, body: faker.lorem.words(5) },
        { userId: 11, listingId: 19, body: faker.lorem.words(5) },
        { userId: 10, listingId: 19, body: faker.lorem.words(5) },
        { userId: 13, listingId: 19, body: faker.lorem.words(5) },
        { userId: 14, listingId: 19, body: faker.lorem.words(5) },
        { userId: 10, listingId: 20, body: faker.lorem.words(5) },
        { userId: 11, listingId: 20, body: faker.lorem.words(5) },
        { userId: 12, listingId: 20, body: faker.lorem.words(5) },
        { userId: 13, listingId: 20, body: faker.lorem.words(5) },
        { userId: 14, listingId: 20, body: faker.lorem.words(5) },
        { userId: 10, listingId: 21, body: faker.lorem.words(5) },
        { userId: 11, listingId: 21, body: faker.lorem.words(5) },
        { userId: 12, listingId: 21, body: faker.lorem.words(5) },
        { userId: 13, listingId: 21, body: faker.lorem.words(5) },
        { userId: 14, listingId: 21, body: faker.lorem.words(5) },
        { userId: 10, listingId: 22, body: faker.lorem.words(5) },
        { userId: 11, listingId: 22, body: faker.lorem.words(5) },
        { userId: 12, listingId: 22, body: faker.lorem.words(5) },
        { userId: 13, listingId: 22, body: faker.lorem.words(5) },
        { userId: 14, listingId: 22, body: faker.lorem.words(5) },
        { userId: 10, listingId: 23, body: faker.lorem.words(5) },
        { userId: 11, listingId: 23, body: faker.lorem.words(5) },
        { userId: 12, listingId: 23, body: faker.lorem.words(5) },
        { userId: 13, listingId: 23, body: faker.lorem.words(5) },
        { userId: 14, listingId: 23, body: faker.lorem.words(5) },
        { userId: 10, listingId: 24, body: faker.lorem.words(5) },
        { userId: 11, listingId: 24, body: faker.lorem.words(5) },
        { userId: 12, listingId: 24, body: faker.lorem.words(5) },
        { userId: 13, listingId: 24, body: faker.lorem.words(5) },
        { userId: 14, listingId: 24, body: faker.lorem.words(5) },
        { userId: 10, listingId: 25, body: faker.lorem.words(5) },
        { userId: 11, listingId: 25, body: faker.lorem.words(5) },
        { userId: 12, listingId: 25, body: faker.lorem.words(5) },
        { userId: 13, listingId: 25, body: faker.lorem.words(5) },
        { userId: 14, listingId: 25, body: faker.lorem.words(5) },
        { userId: 10, listingId: 26, body: faker.lorem.words(5) },
        { userId: 11, listingId: 26, body: faker.lorem.words(5) },
        { userId: 12, listingId: 26, body: faker.lorem.words(5) },
        { userId: 13, listingId: 26, body: faker.lorem.words(5) },
        { userId: 14, listingId: 26, body: faker.lorem.words(5) },
        { userId: 10, listingId: 27, body: faker.lorem.words(5) },
        { userId: 11, listingId: 27, body: faker.lorem.words(5) },
        { userId: 12, listingId: 27, body: faker.lorem.words(5) },
        { userId: 13, listingId: 27, body: faker.lorem.words(5) },
        { userId: 14, listingId: 27, body: faker.lorem.words(5) },
        { userId: 10, listingId: 28, body: faker.lorem.words(5) },
        { userId: 11, listingId: 28, body: faker.lorem.words(5) },
        { userId: 12, listingId: 28, body: faker.lorem.words(5) },
        { userId: 13, listingId: 28, body: faker.lorem.words(5) },
        { userId: 14, listingId: 28, body: faker.lorem.words(5) },
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
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};
