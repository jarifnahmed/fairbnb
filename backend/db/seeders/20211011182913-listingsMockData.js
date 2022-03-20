'use strict';
const { faker } = require('@faker-js/faker');

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
      'Listings',
      [
        // The first 3 listings belong to demo user
        {
          authorId: 1,
          title: 'The Midtown Spot',
          propertyType: 'Condo',
          city: 'Atlanta, GA, USA',
          lat: 33.753746,
          lng: -84.38633,
          price: 150,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602193/fairbnb-SeedData/The%20Midtown%20Spot/929253f5-f7a2-4252-bc2b-ff3af405bfcd-0219_Growth_and_Development_Apartments_at_Hartwell_Village_in_Seneca_008_zule7z.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602169/fairbnb-SeedData/The%20Midtown%20Spot/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1_kukgzn.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647601771/fairbnb-SeedData/The%20Midtown%20Spot/76598b322860535e0a7cccb6f821c215_kyqmqq.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602214/fairbnb-SeedData/The%20Midtown%20Spot/2000_f2e894.jpg',
            // 'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602196/fairbnb-SeedData/The%20Midtown%20Spot/old-town-by-welcome-apartment_h5k4ay.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 1,
          title: 'Rhythm of Atlanta',
          propertyType: 'House',
          city: 'Atlanta, GA, USA',
          lat: 33.753746,
          lng: -84.38633,
          price: 80,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602876/fairbnb-SeedData/Rhythm%20of%20Atlanta/960x0_ghn5v5.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608401/fairbnb-SeedData/Rhythm%20of%20Atlanta/featured-image-living-room-lighting_xi8qac.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647601815/fairbnb-SeedData/Rhythm%20of%20Atlanta/18c84416bf261cc3d0a85ef87ba3ad98_kv9aea.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647601799/fairbnb-SeedData/Rhythm%20of%20Atlanta/Nerdy-and-Cozy-Setup_dwmxwr.jpg',
            // 'https://res.cloudinary.com/diiwknzfk/image/upload/v1647601785/fairbnb-SeedData/Rhythm%20of%20Atlanta/Classic-Male-Living-Space-Ideas_mpdlux.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 1,
          title: 'Lovely studio in the center of Miami',
          propertyType: 'Apartment',
          city: 'Miami, FL, USA',
          lat: 25.761681,
          lng: -80.191788,
          price: 160,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602465/fairbnb-SeedData/Lovely%20studio%20in%20the%20center%20of%20Miami/image_zbbv5a.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602286/fairbnb-SeedData/Lovely%20studio%20in%20the%20center%20of%20Miami/S4ZX2DV7BZDW5HW54OMMISE4Y4_tvmg8p.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602270/fairbnb-SeedData/Lovely%20studio%20in%20the%20center%20of%20Miami/flor-apt-living-_2_-hero.jpg_yp5t0b.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602255/fairbnb-SeedData/Lovely%20studio%20in%20the%20center%20of%20Miami/blueground-apartment-2-2-2_lxfo7k.jpg',
            // 'https://res.cloudinary.com/diiwknzfk/image/upload/v1647601738/fairbnb-SeedData/Lovely%20studio%20in%20the%20center%20of%20Miami/305507067.0_udjmwx.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        // starting here, all the listings belong to other users
        {
          authorId: 3,
          title: 'A Place to Stay in the Heights',
          propertyType: 'Townhouse',
          city: 'Houston, TX, USA',
          lat: 29.760427,
          lng: -95.369804,
          price: 120,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602983/fairbnb-SeedData/A%20Place%20To%20Stay%20in%20the%20Heights/DavidZaslav_NYCTH1_eqeynz.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602407/fairbnb-SeedData/A%20Place%20To%20Stay%20in%20the%20Heights/chicago-apartments-350-w-oakdale-interior-living-room-ultimate-lakeview-chicago-apartment_qruvqh.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602340/fairbnb-SeedData/A%20Place%20To%20Stay%20in%20the%20Heights/470_20Manhattan_20Duplex_201600x1050.jpg_xwyszv.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602303/fairbnb-SeedData/A%20Place%20To%20Stay%20in%20the%20Heights/CLS_6485-Edit_merrsm_k015lc.jpg',
            // 'https://res.cloudinary.com/diiwknzfk/image/upload/v1647601824/fairbnb-SeedData/A%20Place%20To%20Stay%20in%20the%20Heights/6kbcba25gar21_vaovuq.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 3,
          title: 'Close to Plaza, NoDa & train! Comfy/clean/simple!',
          propertyType: 'Apartment',
          city: 'Charlotte, NC, USA',
          lat: 35.227085,
          lng: -80.843124,
          price: 120,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602519/fairbnb-SeedData/Close%20to%20Plaza/DJI_0595-Edit_naq19o_jdlajo.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602492/fairbnb-SeedData/Close%20to%20Plaza/Session-Unit1-004_k2la2t_whbeyz.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602434/fairbnb-SeedData/Close%20to%20Plaza/biggest-philly-apartments-station-at-willow-grove-model-apartment-petrucci-residential_fumozr.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608395/fairbnb-SeedData/Close%20to%20Plaza/Small-living-room-ideas_Grey-sofa_vvilmx.jpg',
            // 'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608398/fairbnb-SeedData/Close%20to%20Plaza/casa-do-hugo-furo-mariana-sanches_buyvlf.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 2,
          title: 'Lovely Treehouse in the Woods next to Stream',
          propertyType: 'Treehouse',
          city: 'Hardwick, VT, USA',
          lat: 44.5416243,
          lng: -72.34868,
          price: 180,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603301/fairbnb-SeedData/Lovely%20Treehouse%20in%20the%20Woods%20next%20to%20Stream/DJI_0247_hqdp9s.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603410/fairbnb-SeedData/Lovely%20Treehouse%20in%20the%20Woods%20next%20to%20Stream/nelsontreehouse_61234597_824768181211870_8550137160998732658_n-4f3830a3764240b09ea758c53d95a18b_kgeaou.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603419/fairbnb-SeedData/Lovely%20Treehouse%20in%20the%20Woods%20next%20to%20Stream/Blue-Forest-Fauns-Realm-Tree-House-Alexander-Whittle-Photography8_f0x2eq.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603427/fairbnb-SeedData/Lovely%20Treehouse%20in%20the%20Woods%20next%20to%20Stream/haasandhaas-0556_jw5rcu.jpg',
            // 'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603440/fairbnb-SeedData/Lovely%20Treehouse%20in%20the%20Woods%20next%20to%20Stream/the-magic-home-slider-01_dcrzip.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },
        {
          authorId: 2,
          title: 'Chalet White Wolf SPA at Fiddler Lake',
          propertyType: 'Cabin',
          city: 'Jay, NY, USA',
          lat: 44.3750471,
          lng: -73.7281951,
          price: 200,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647609897/fairbnb-SeedData/Chalet%20White%20Wolf/ADKCabin_a9fc211b-1a0b-4503-bdf6-438457b9965a_gvsqqw.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603551/fairbnb-SeedData/Chalet%20White%20Wolf/roomporn-mt-treehouse-retreat-9_nc92ne.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603501/fairbnb-SeedData/Chalet%20White%20Wolf/at-the-waters-edge-slider-03_ouztbr.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603484/fairbnb-SeedData/Chalet%20White%20Wolf/Bibliotheque-Interior-8-1_zjqo5h.jpg',
            // 'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603469/fairbnb-SeedData/Chalet%20White%20Wolf/Bibliotheque-Interior-32-1_nup4nk.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 2,
          title: 'Southern California Wine Country Resort & Vineyard',
          propertyType: 'Mansion',
          city: 'Temecula, CA, USA',
          lat: 33.4870075,
          lng: -117.143784,
          price: 20,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603905/fairbnb-SeedData/Southern%20California%20Wine%20Country%20Resort%20And%20Vineyard/210422-florida-wedding-mb-1802_rzbsf0.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608441/fairbnb-SeedData/Southern%20California%20Wine%20Country%20Resort%20And%20Vineyard/oakImage-1549299950264-videoSixteenByNineJumbo1600_nnpz37.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608463/fairbnb-SeedData/Southern%20California%20Wine%20Country%20Resort%20And%20Vineyard/lavender2-dd461d67ee8240d5bbca3e0b09e9c41c_j04k2i.png',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608488/fairbnb-SeedData/Southern%20California%20Wine%20Country%20Resort%20And%20Vineyard/xVbjC6PQ3FbvnUDUNfxAbH_wyumwb.jpg',
            // 'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608502/fairbnb-SeedData/Southern%20California%20Wine%20Country%20Resort%20And%20Vineyard/modern-living-room-jan18-00007_gqyfyt.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
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

    await queryInterface.bulkDelete('Listings', null, {});
  },
};
