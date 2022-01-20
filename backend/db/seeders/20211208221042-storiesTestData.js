'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Stories',
      [
        {
          authorId: 2,
          title: "Toyota GR86",
          subtitle: "Should I get this?",
          imageUrl: "https://www.motortrend.com/uploads/sites/5/2021/08/2022-Toyota-GR-86-2.jpg?fit=around%7C875:492",
          body: "Body 1."
        },
        {
          authorId: 2,
          title: "Mazda MX-5 Miata",
          subtitle: "Saw this on the road today.",
          imageUrl: "https://www.cnet.com/a/img/1CTew24BBMxABML0P6KLk2Q8Obc=/940x0/2019/12/02/5ee09790-f40b-4b40-9e6b-b6bee0040531/mazda-miata-30th-anniversary-001.jpg",
          body: "Body 2."
        },
        {
          authorId: 1,
          title: "Dodge Viper",
          subtitle: "Can't believe this got discontinued.",
          imageUrl: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F04%2F2017-dodge-viper-gts-r-commemorative-edition-acr-bring-a-trailer-sold-230000-usd-0.jpg?q=75&w=800&cbr=1&fit=max",
          body: "Body 3."
        },
        {
          authorId: 1,
          title: "Subaru BRZ",
          subtitle: "Just like the Toyota.",
          imageUrl: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/1subarubrz2-6.jpg?itok=-9uhMqzx",
          body: "Body 4."
        },
        {
          authorId: 3,
          title: "Shelby GT500",
          subtitle: "Love the look!",
          imageUrl: "https://www.motortrend.com/uploads/sites/5/2019/01/2020-Ford-Mustang-Shelby-G500-9.jpg?fit=around%7C875:492",
          body: "Body 5."
        },
        {
          authorId: 3,
          title: "Corvette Stingray",
          subtitle: "Dream Car",
          imageUrl: "https://www.motortrend.com/uploads/sites/5/2019/07/2020-Chevrolet-Corvette-front-three-quarter-2.jpg?fit=around%7C875:492",
          body: "Body 6."
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Stories', null, {});
  },
};

