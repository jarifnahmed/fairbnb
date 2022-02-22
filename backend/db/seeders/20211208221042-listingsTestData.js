'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Listings',
      [
        {
          authorId: 2,
          title: 'Bed-Stuy Apartment',
          subtitle: '1234 Whiting Ave, New York, NY, USA',
          imageUrl:
            'https://cdn.vox-cdn.com/thumbor/wr36UvgMmAov36FoIN_BIyXcaOE=/0x0:1199x800/1200x800/filters:focal(505x305:695x495)/cdn.vox-cdn.com/uploads/chorus_image/image/58640751/305507067.0.jpg',
          body: 'For only $150, you can get an affordable apartment in Brooklyn with a great view!',
        },
        {
          authorId: 3,
          title: 'Atlanta Condo',
          subtitle: '8821 Douglas Mews Suite , Atlanta, GA, USA',
          imageUrl:
            'https://i.pinimg.com/originals/76/59/8b/76598b322860535e0a7cccb6f821c215.jpg',
          body: 'For only $120, you can get an affordable apartment in Atlanta at a great location.',
        },
        {
          authorId: 2,
          title: 'Boston Condo',
          subtitle: '906 Schoen Corners, Boston, MA, USA',
          imageUrl:
            'https://www.manored.com/wp-content/uploads/2021/02/Nerdy-and-Cozy-Setup.jpg',
          body: 'Only $100 for many amenities included!',
        },
        {
          authorId: 2,
          title: 'Jacksonville Apartment',
          subtitle: '2950 Francisca Oval, Jacksonville, FL, USA',
          imageUrl:
            'https://i.pinimg.com/originals/18/c8/44/18c84416bf261cc3d0a85ef87ba3ad98.jpg',
          body: '$150, for a nice clean place in the heart of Jacksonville!',
        },
        {
          authorId: 3,
          title: 'Chicago Apartment',
          subtitle: '4739 Little Brooks Road, Chicago, IL, USA',
          imageUrl:
            'https://preview.redd.it/6kbcba25gar21.jpg?width=640&crop=smart&auto=webp&s=822f4d65900164287b1f3a8e2cdd4e15620bb35b',
          body: 'At $130, you can get an affordable apartment with many stores nearby!',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Listings', null, {});
  },
};
