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
      'Stories',
      [
        {
          authorId: 1,
          title: 'Nice Clean Apartment!',
          propertyType: 'Apartment',
          city: 'Houston, TX, USA',
          lat: 29.749907,
          lng: -95.358421,
          price: 150,
          imageUrl:
            'https://cdn.vox-cdn.com/thumbor/wr36UvgMmAov36FoIN_BIyXcaOE=/0x0:1199x800/1200x800/filters:focal(505x305:695x495)/cdn.vox-cdn.com/uploads/chorus_image/image/58640751/305507067.0.jpg',
          body: 'An affordable apartment in Houston with a great view!',
        },
        {
          authorId: 3,
          title: 'Comfortable Condo',
          propertyType: 'Condo',
          city: 'Charlotte, NC, USA',
          lat: 35.227085,
          lng: -80.843124,
          price: 120,
          imageUrl:
            'https://i.pinimg.com/originals/76/59/8b/76598b322860535e0a7cccb6f821c215.jpg',
          body: 'An affordable condo at a great location.',
        },
        {
          authorId: 2,
          title: 'River View Home',
          propertyType: 'House',
          city: 'Boston, MA, USA',
          lat: 42.361145,
          lng: -71.057083,
          price: 100,
          imageUrl:
            'https://www.manored.com/wp-content/uploads/2021/02/Nerdy-and-Cozy-Setup.jpg',
          body: 'Many amenities included!',
        },
        {
          authorId: 2,
          title: 'Downtown Apartment',
          propertyType: 'Apartment',
          city: 'Los Angeles, CA, USA',
          lat: 34.052235,
          lng: -118.243683,
          price: 130,
          imageUrl:
            'https://i.pinimg.com/originals/18/c8/44/18c84416bf261cc3d0a85ef87ba3ad98.jpg',
          body: 'A nice clean place in the heart of LA!',
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

    await queryInterface.bulkDelete('Stories', null, {});
  },
};
