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
      'Comments',
      [
        { userId: 1, storyId: 4, body: 'Enjoyed my stay here.' },
        { userId: 2, storyId: 1, body: 'Great host!' },
        { userId: 3, storyId: 2, body: 'Clean place.' },
        { userId: 2, storyId: 2, body: "Didn't have a good experience." },
        { userId: 3, storyId: 8, body: 'Too expensive.' },
        { userId: 4, storyId: 8, body: 'Absolute rip off.' },
        { userId: 5, storyId: 8, body: 'I have seen better.' },
        { userId: 6, storyId: 8, body: 'Not big enough.' },
        { userId: 7, storyId: 8, body: 'Pool was not big enough.' },
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
