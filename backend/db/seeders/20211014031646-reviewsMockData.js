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
