'use strict';

const { default: faker } = require("@faker-js/faker");

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
      'Comments',
      [
        { userId: 1, storyId: 4, body: faker.lorem.words(5) },
        { userId: 2, storyId: 1, body: faker.lorem.words(5) },
        { userId: 3, storyId: 2, body: faker.lorem.words(5) },
        { userId: 2, storyId: 2, body: faker.lorem.words(5) },
        { userId: 3, storyId: 8, body: faker.lorem.words(5) },
        { userId: 4, storyId: 8, body: faker.lorem.words(5) },
        { userId: 5, storyId: 8, body: faker.lorem.words(5) },
        { userId: 6, storyId: 8, body: faker.lorem.words(5) },
        { userId: 7, storyId: 8, body: faker.lorem.words(5) },
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
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
