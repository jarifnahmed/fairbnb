'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          storyId: 1,
          userId: 1,
          body: 'Random Comment 1.',
        },
        {
          storyId: 1,
          userId: 2,
          body: 'Random Comment 2.',
        },
        {
          storyId: 2,
          userId: 2,
          body: 'Random Comment 3.',
        },
        {
          storyId: 3,
          userId: 1,
          body: 'Random Comment 4.',
        },
        {
          storyId: 3,
          userId: 3,
          body: 'Random Comment 5.',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};

