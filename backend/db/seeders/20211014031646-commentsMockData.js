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
     await queryInterface.bulkInsert('Comments', [
      {userId: 1, storyId: 1, body: "Enjoyed my stay here."},
      {userId: 2, storyId: 1, body: "Great host!"},
      {userId: 3, storyId: 2, body: "Clean place."},
      {userId: 2, storyId: 2, body: "Didn't have a good experience."},
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Comments', null, {});
  }
};
