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
          title: 'Zoo Nearby',
          propertyType: 'Apartment',
          city: 'Houston, TX, USA',
          lat: 29.760427,
          lng: -95.369804,
          price: 150,
          imageUrl:
            'https://cdn.vox-cdn.com/thumbor/wr36UvgMmAov36FoIN_BIyXcaOE=/0x0:1199x800/1200x800/filters:focal(505x305:695x495)/cdn.vox-cdn.com/uploads/chorus_image/image/58640751/305507067.0.jpg',
          body: 'An affordable apartment in Houston with a great view!',
        },

        {
          authorId: 3,
          title: 'Comfortable Condo',
          propertyType: 'Condo',
          lat: 35.227085,
          lng: -80.843124,
          city: 'Charlotte, NC, USA',
          price: 120,
          imageUrl:
            'https://i.pinimg.com/originals/76/59/8b/76598b322860535e0a7cccb6f821c215.jpg',
          body: 'An affordable condo at a great location.',
        },

        {
          authorId: 3,
          title: 'Nice and Clean Home!',
          propertyType: 'House',
          lat: 35.227085,
          lng: -80.843124,
          city: 'Charlotte, NC, USA',
          price: 120,
          imageUrl:
            'https://i1.wp.com/cbf-fund.org/wp-content/uploads/2017/08/Classic-Male-Living-Space-Ideas.jpg?resize=770%2C513',
          body: 'An affordable house at a great location.',
        },

        {
          authorId: 2,
          title: 'River View Home',
          propertyType: 'House',
          city: 'Boston, MA, USA',
          lat: 42.360081,
          lng: -71.058884,
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
        {
          authorId: 3,
          title: 'Lake Michigan View',
          propertyType: 'Apartment',
          city: 'Chicago, IL, USA',
          lat: 41.878113,
          lng: -87.629799,
          price: 110,
          imageUrl:
            'https://preview.redd.it/6kbcba25gar21.jpg?width=640&crop=smart&auto=webp&s=822f4d65900164287b1f3a8e2cdd4e15620bb35b',
          body: 'An affordable apartment with an amazing view of Lake Michigan!',
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
