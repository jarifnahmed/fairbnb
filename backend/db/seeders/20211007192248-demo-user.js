'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

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
      'Users',
      [
        {
          email: 'demo@user.io',
          username: 'Demo',
          name: 'Demo User',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'fake1@fake.com',
          username: 'FakeUser1',
          name: 'John Doe',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'fake2@fake.com',
          username: 'FakeUser2',
          name: 'Jane Doe',
          hashedPassword: bcrypt.hashSync('password'),
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
    const Op = Sequelize.Op;

    await queryInterface.bulkDelete(
      'Users',
      {
        username: { [Op.in]: ['Demo'] },
      },
      {}
    );
  },
};
