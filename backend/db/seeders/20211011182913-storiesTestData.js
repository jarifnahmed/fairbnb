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
          body: 'Enjoy a stylish and chic experience at this centrally-located High-rise. The safest neighborhood in ATL features Prime Nightlife and Fine dining options just footsteps away. Free parking and walking distance from Marta Arts Center Station and Piedmont Park. 24hr Security & Concierge.',
        },

        {
          authorId: 1,
          title: 'Rhythm of Atlanta',
          propertyType: 'House',
          city: 'Atlanta, GA, USA',
          lat: 33.753746,
          lng: -84.38633,
          price: 140,
          imageUrl: [
            'https://res.cloudinary.https://res.cloudinary.com/diiwknzfk/image/upload/v1647602699/fairbnb-SeedData/Rhythm%20of%20Atlanta/a1c1a1a36c9e4ff8adcb958c4276f28d-jumbo_v1p1kb.jpg/diiwknzfk/image/upload/v1647602193/fairbnb-SeedData/The%20Midtown%20Spot/929253f5-f7a2-4252-bc2b-ff3af405bfcd-0219_Growth_and_Development_Apartments_at_Hartwell_Village_in_Seneca_008_zule7z.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602976/fairbnb-SeedData/Rhythm%20of%20Atlanta/Zandberg-London-Townhouse_11_sombbx.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647601815/fairbnb-SeedData/Rhythm%20of%20Atlanta/18c84416bf261cc3d0a85ef87ba3ad98_kv9aea.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647601799/fairbnb-SeedData/Rhythm%20of%20Atlanta/Nerdy-and-Cozy-Setup_dwmxwr.jpg',
            // 'https://res.cloudinary.com/diiwknzfk/image/upload/v1647601785/fairbnb-SeedData/Rhythm%20of%20Atlanta/Classic-Male-Living-Space-Ideas_mpdlux.jpg',
          ],
          body: 'Welcome to your Atlanta home ❤️ Located right in the crux of Atlanta, this place is perfect for catching the ATL fever. You will love your second home. This quiet neighborhood is full of impressive greenery and beautiful birds for when you need inspirational peace. To add to that, everything is close by. Once you are home, lounge around in your recliners, relax on the back deck, or whip up something delicious.',
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
          body: 'Stay in a beautiful and Cosy studio apartment in the center of the Miami. Our building is located in the quaint town of Coconut grove on the most central street in all of Miami, US1. Our locations puts you only a short drive to any place in our Miami. Our wonderful loft is perfect for couples and solo travellers. It has been designed with your comfort and needs in mind. The fully stocked kitchen, free gated parking, comfy bed, and central location will give you the perfect home away from home.',
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
          body: 'In Houston for an Internship? or big project? Need a short term place to stay for a few weeks or months? Cheerful fully-furnished rooms in the Historic Houston Heights. You will have exclusive use of a large bedroom plus 2nd room with day bed and streaming TV, a private bathroom, a mini-kitchen and laundry. Off street parking and wifi. Walking distance to wonderful Heights restaurants and bars. Nearby hike and bike trail. Convenient bus lines to downtown, museum district and medical center.',
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
          body: 'This is not your average room-in-a-house rental where you are trying to check in while a family is having dinner or you cannot head out for the night without making small talk with the couple on the couch. I set up my home more like a hotel where guests are able to walk in, pass the Keurig coffee station & head upstairs to their rooms. You still get all of the savings but with way more privacy!',
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
          body: 'You will feel the stresses of life wash away as you sway in the trees and listen to the sounds of the beautiful stream just feet from the treehouse deck. You will never want to leave! Enjoy a bit of solitude or some special alone time with a loved one. It is hard to beat Stone City Treehouse to make your time away special!',
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
          body: 'The Chalet White Wolf is a beautiful log house located in the prestigious Fiddler Lake Resort, on a private lot of more than 60,000 square feet. Peace and privacy guaranteed! Enjoy relaxing moments with our private heated pool, hot tub and outdoor dry sauna. This log cabin has 4 bedrooms and 3 full bathrooms. It can accommodate up to 10 adults. The kitchen is equipped with stainless steel appliances, including a dishwasher and a microwave. Other amenities such as satellite TV, Wi-Fi internet, washer and dryer are also provided.',
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
          body: 'A premier Southern California private resort and vineyard, this impressive 5 acre property abounds in luxury and endless possibilities. Breathtaking views of Temecula Wine Country make this home perfect for entertaining or for relaxing in resort-style tranquility. As you enter the home you are greeted by a vaulted ceiling foyer with a radiant retro style chandelier. The view from the great room paired with the stunning swimming pool inspires a profound feeling of peace as you sit within the masterpiece estate. Our vineyard wraps around the home so that in every area of property you are surrounded by a gentle breeze carrying the scent of newly planted grape vines. Vaquero Resort is just 5 minutes from local wineries, 10 minutes to Old Town Temecula, golf, hot air balloon rides, horseback riding, spa treatments, and Pechanga Casino making it perfect for private events, multi-family vacations, family reunions, yoga retreats, corporate events, and more!',
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
