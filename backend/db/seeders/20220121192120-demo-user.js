'use strict';
// const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'demo@demo.com',
          username: 'Demo',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'fake1@fake.com',
          username: 'FakeUser1',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'fake2@fake.com',
          username: 'FakeUser2',
          hashedPassword: bcrypt.hashSync('password'),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'Users',
      {
        username: { [Op.in]: ['Demo', 'FakeUser1', 'FakeUser2'] },
      },
      {}
    );
  },
};