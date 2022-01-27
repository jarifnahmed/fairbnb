'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Stories',
      [
        {
          authorId: 2,
          title: "Bed-Stuy Apartment",
          subtitle: "1234 Whiting Ave, New York, NY, USA",
          imageUrl: "https://cdn.vox-cdn.com/thumbor/wr36UvgMmAov36FoIN_BIyXcaOE=/0x0:1199x800/1200x800/filters:focal(505x305:695x495)/cdn.vox-cdn.com/uploads/chorus_image/image/58640751/305507067.0.jpg",
          body: "For only $150, you can get an affordable apartment in Brooklyn with a great view!"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Stories', null, {});
  },
};
