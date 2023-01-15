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
        // The first 3 Listings belong to demo user
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

        // starting here, all the Listings belong to other Users
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

        {
          authorId: 3,
          title: 'Stone Mansion',
          propertyType: 'Mansion',
          city: 'Milwaukee, WI, USA',
          lat: 43.038902,
          lng: -87.906471,
          price: 70,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647606025/fairbnb-SeedData/Stone%20Mansion/100987825-121017_EJ_stone_mansion_0014r_uobkj6.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608847/fairbnb-SeedData/Stone%20Mansion/5e8469f3fb0f080028d0e090_cover_qhwlp4.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608878/fairbnb-SeedData/Stone%20Mansion/Functional-living-room_David-Henderson85_Shutterstock_wntocg.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608973/fairbnb-SeedData/Stone%20Mansion/living-room-large-area-rug-bcf9729c_nusxwl.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 4,
          title: 'Marland Mansion',
          propertyType: 'Mansion',
          city: 'Albuquerque, NM, USA',
          lat: 35.106766,
          lng: -106.629181,
          price: 160,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647605919/fairbnb-SeedData/Marland%20Mansion/Marland-Mansion-Lawn-min_yzvflb.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608431/fairbnb-SeedData/Marland%20Mansion/1564684055231_r5cdot.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608778/fairbnb-SeedData/Marland%20Mansion/8gWHdR7b37GDtBfzEKe4aL_hlbtxv.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608812/fairbnb-SeedData/Marland%20Mansion/Beautiful-small-white-living-room-blends-monochromatic-beauty-with-modernity-53868-870x520_ykdkrw.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 5,
          title: 'Old Castle',
          propertyType: 'Mansion',
          city: 'Boise, ID, USA',
          lat: 43.618881,
          lng: -116.215019,
          price: 170,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647604212/fairbnb-SeedData/Old%20Castle/3716-WhiteChapel-Southlake-2_e8pi6t.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608395/fairbnb-SeedData/Old%20Castle/melanie-pounds-mountain-brook-house-tour-living-room-fireplace-jpg-1623351404_crxzym.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608423/fairbnb-SeedData/Old%20Castle/8gWHdR7b37GDtBfzEKe4aL-768-80_xtatqm.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608550/fairbnb-SeedData/Old%20Castle/edc-mark-cunningham-trends-2living-room-1608147086_mrnil6.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 5,
          title: 'Wide Space Townhouse',
          propertyType: 'Townhouse',
          city: 'Denver, CO, USA',
          lat: 39.742043,
          lng: -104.991531,
          price: 30,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602975/fairbnb-SeedData/Wide%20Space%20Townhouse/modern-townhouse-complex-picture-id175767618_qrdxj3.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608452/fairbnb-SeedData/Wide%20Space%20Townhouse/Family-room-hero_CreativaStudio_Getty-Images_my7gw5.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608475/fairbnb-SeedData/Wide%20Space%20Townhouse/Masculine-Living-Room-Ideas-Inspirations-7-1200x800_feaja0.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608517/fairbnb-SeedData/Wide%20Space%20Townhouse/apartamento-faria-lima-pietro-terlizzi-arquitetura-guilherme-pucci_ilxtnp.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 6,
          title: 'Modern Townhouse',
          propertyType: 'Townhouse',
          city: 'Scottsdale, AZ, USA',
          lat: 33.501324,
          lng: -111.925278,
          price: 80,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602977/fairbnb-SeedData/Modern%20Townhouse/how-to-rent-an-apartment-in-a-townhouse-NYC-view-of-colorful-townhouses-21a551_ytkark.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608405/fairbnb-SeedData/Modern%20Townhouse/emapeter-1643063054_sw1zoj.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608410/fairbnb-SeedData/Modern%20Townhouse/fQ6JbtDCr9Anq9d8N7A9rM_fncncf.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608416/fairbnb-SeedData/Modern%20Townhouse/feature-LivingRoom-091_TREES_HH_AP20_40_gmwmqf.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 7,
          title: 'Newly Built Townhouse',
          propertyType: 'Townhouse',
          city: 'Las Vegas, NV, USA',
          lat: 36.114647,
          lng: -115.172813,
          price: 40,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602986/fairbnb-SeedData/Newly%20Built%20Townhouse/bernadette-gatsby-bN_TkedaBuQ-unsplash_u7kx28.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602976/fairbnb-SeedData/Newly%20Built%20Townhouse/Zandberg-London-Townhouse_11_sombbx.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608568/fairbnb-SeedData/Newly%20Built%20Townhouse/small-living-room-ideas-4129044-hero-25cff5d762a94ccba3472eaca79e56cb_py1npb.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608629/fairbnb-SeedData/Newly%20Built%20Townhouse/X3rtsvGnkp7YcKYRyErt4j_wpjjon.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 6,
          title: 'Large Log Cabin',
          propertyType: 'Cabin',
          city: 'Buffalo, NY, USA',
          lat: 42.88023,
          lng: -78.878738,
          price: 110,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603140/fairbnb-SeedData/Large%20Log%20Cabin/The-Lodge-Spring_u6q55s.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603157/fairbnb-SeedData/Large%20Log%20Cabin/1c1d81b0-162b-4f81-a742-271cd4e64204.lg1_dsjchq.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603174/fairbnb-SeedData/Large%20Log%20Cabin/11.23.2019.30_0_0_0_h8ivv8.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603518/fairbnb-SeedData/Large%20Log%20Cabin/06db9e970a1e5c2bef730e1a27157911_tobvb3.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 5,
          title: 'Snow Cabin',
          propertyType: 'Cabin',
          city: 'Akron, OH, USA',
          lat: 41.081757,
          lng: -81.511452,
          price: 20,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647610114/fairbnb-SeedData/Snow%20Cabin/1482255172-screen-shot-2016-12-20-at-1230_whhign.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603002/fairbnb-SeedData/Snow%20Cabin/scenichill-52_1_orig_mboxk4.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603001/fairbnb-SeedData/Snow%20Cabin/log-cabin-living-room-interior-design-Edwards-Smith_rsxuyj.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602999/fairbnb-SeedData/Snow%20Cabin/log-home-interior-picture-id134681720_kykkj6.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 4,
          title: 'Winter Cabin',
          propertyType: 'Cabin',
          city: 'Portland, OR, USA',
          lat: 45.523064,
          lng: -122.676483,
          price: 30,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647609934/fairbnb-SeedData/Winter%20Cabin/winter-cabin-hero-image-dunton-hot-springs_lpbllu.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603138/fairbnb-SeedData/Winter%20Cabin/8856760796_zkuh6t.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603004/fairbnb-SeedData/Winter%20Cabin/modern-cabin-interior-design-ideas-6_ufq003.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602997/fairbnb-SeedData/Winter%20Cabin/broken-bow-cabin-the-haven-02_jwv4b3.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 3,
          title: 'Treehouse Near Water',
          propertyType: 'Treehouse',
          city: 'Wichita, KS, USA',
          lat: 37.697948,
          lng: -97.314835,
          price: 40,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603317/fairbnb-SeedData/Treehouse%20Near%20Water/Mohicans_20The_20View_20treehouse_20-_20Credit_20Allen_20Heimberger-2_wawmzg.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603009/fairbnb-SeedData/Treehouse%20Near%20Water/CS-Irwin_obeajy.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603006/fairbnb-SeedData/Treehouse%20Near%20Water/log-home-interior-picture-id134681720_rsceez.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603005/fairbnb-SeedData/Treehouse%20Near%20Water/pigeon-forge-cabin-copper-river-living-room-1_n0acbz.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 2,
          title: 'Nature Retreat',
          propertyType: 'Treehouse',
          city: 'Anchorage, AK, USA',
          lat: 61.217381,
          lng: -149.863129,
          price: 100,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603298/fairbnb-SeedData/Nature%20Retreat/1555507098172_blhi8c.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602996/fairbnb-SeedData/Nature%20Retreat/hilltop-cabin-5_nqqatr.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602995/fairbnb-SeedData/Nature%20Retreat/default_h41tx8.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602993/fairbnb-SeedData/Nature%20Retreat/38849710-2-airbnb-log_lvxlot.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 4,
          title: 'Small Natural House',
          propertyType: 'Treehouse',
          city: 'Mesa, AZ, USA',
          lat: 33.424564,
          lng: -111.833267,
          price: 170,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603310/fairbnb-SeedData/Small%20Natural%20House/D5C22151-000C-BF94-DA3056B72539AE63_fhzgdh.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603454/fairbnb-SeedData/Small%20Natural%20House/201812-World-Treehouses_Rustic-Interior-Asheville-WNC-treehouse-builders-1.jpg-175.5-KB-1-1_ljkeh2.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603534/fairbnb-SeedData/Small%20Natural%20House/20130530-QNATREEHOUSE-slide-J6TB-articleLarge_dv5auv.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603589/fairbnb-SeedData/Small%20Natural%20House/image_jo5iny.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 4,
          title: 'Clean and Modern House',
          propertyType: 'House',
          city: 'Rochester, NY, USA',
          lat: 43.16103,
          lng: -77.610924,
          price: 30,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647606173/fairbnb-SeedData/Luxury%20Mansion/Exterior-1024x683_ydxpsu.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608654/fairbnb-SeedData/Luxury%20Mansion/room_decor_with_plants_hovadm.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608908/fairbnb-SeedData/Luxury%20Mansion/photo-1600121848594-d8644e57abab_sptyma.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608940/fairbnb-SeedData/Luxury%20Mansion/WestofmainSaschaLaFleur1-91710d0e8e744c5d8e1d71432863e70a_dwk6da.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 5,
          title: 'Spacious House',
          propertyType: 'House',
          city: 'Dallas, TX, USA',
          lat: 32.779167,
          lng: -96.808891,
          price: 140,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602950/fairbnb-SeedData/Spacious%20House/BH-Oakmont-211-2nd-st-46-6-1624611939_wimogg.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608682/fairbnb-SeedData/Spacious%20House/Family-Living-room-Ideal-Home-920x552_xaafxy.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608712/fairbnb-SeedData/Spacious%20House/06Ding_2520Dong_2520135706_1_rksl4x.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608744/fairbnb-SeedData/Spacious%20House/cozy-keswick-living-featured-scaled_dglufv.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 6,
          title: 'Home With Many Amenities',
          propertyType: 'House',
          city: 'Oakland, CA, USA',
          lat: 37.804363,
          lng: -122.271111,
          price: 90,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647602802/fairbnb-SeedData/Home%20With%20Any%20Accomidations/Traditional-style-suburban-home-shutterstock_398991412-823eff-1024x546_vnkjtw.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647603003/fairbnb-SeedData/Home%20With%20Any%20Accomidations/log-cabin-modular-homes-interior-great-room-1900x1267_wsdmdf.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608534/fairbnb-SeedData/Home%20With%20Any%20Accomidations/specialreport_livingroom_lead-2560x2222_y2ceoz.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1647608608/fairbnb-SeedData/Home%20With%20Any%20Accomidations/apperson-cushioned-back-arm-chair_qgzcac.png',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 7,
          title: 'Campus Condo',
          propertyType: 'Condo',
          city: 'Boston, MA, USA',
          lat: 42.361145,
          lng: -71.057083,
          price: 80,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159823/fairbnb-SeedData/Campus%20Condo/buying-boulder-colorado-condo_matw6x.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159823/fairbnb-SeedData/Campus%20Condo/590162413_svatom.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159823/fairbnb-SeedData/Campus%20Condo/condo-for-sale-rittenhouse-square-high-floor-condo-lving-dining-kitchen-brightmls-1_trflko.png',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159823/fairbnb-SeedData/Campus%20Condo/luxury-kitchen_z41c8y.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 6,
          title: 'Ivy Condo',
          propertyType: 'Condo',
          city: 'New Orleans, LA, USA',
          lat: 29.951065,
          lng: -90.071533,
          price: 90,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159842/fairbnb-SeedData/Ivy%20Condo/ivy-outdoor-render-1_squaoc.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159842/fairbnb-SeedData/Ivy%20Condo/a10634130_1_vynbrk.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159842/fairbnb-SeedData/Ivy%20Condo/ben-living-room_0_oi61ld.webp',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159843/fairbnb-SeedData/Ivy%20Condo/VC4RSY26Q5CAPBXWZFR726SOT4_naid1q.webp',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 5,
          title: 'Newly Built Condo',
          propertyType: 'Condo',
          city: 'Fort Worth, TX, USA',
          lat: 32.768799,
          lng: -97.309341,
          price: 100,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159866/fairbnb-SeedData/Newly%20Built%20Condo/aria-zen-denver-ext_800-03_qi36go.webp',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159866/fairbnb-SeedData/Newly%20Built%20Condo/renovating_your_condo_z51oiy.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159866/fairbnb-SeedData/Newly%20Built%20Condo/condo-reno.1-1024x576_kcssde.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159866/fairbnb-SeedData/Newly%20Built%20Condo/condo_u96kka.jpg',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 4,
          title: 'Central Apartment',
          propertyType: 'Apartment',
          city: 'Atlanta, GA, USA',
          lat: 33.753746,
          lng: -84.38633,
          price: 10,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159706/fairbnb-SeedData/Central%20Apartment/low-apprasials-and-condo-associations-can-trip-up-mortgages_vfbkkz.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159706/fairbnb-SeedData/Central%20Apartment/Luxury-Condo-Below-Market-Price-30-0-Down-Payment-Walking-to-Indoor-Outdoor-Shopping-Seputeh-Seputeh-Malaysia_fmzjzb.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159706/fairbnb-SeedData/Central%20Apartment/new-condos-boston-1_d4iesk.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159706/fairbnb-SeedData/Central%20Apartment/620x465xc_mevnzl.webp',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        {
          authorId: 5,
          title: 'Very Affordable Apartment',
          propertyType: 'Apartment',
          city: 'Los Angeles, CA, USA',
          lat: 34.052235,
          lng: -118.243683,
          price: 80,
          imageUrl: [
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159788/fairbnb-SeedData/Very%20Affordable%20Apartment/7RPMLKKPBBEXIZFEAMNFPNAZ54_cgfmu5.jpg',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159788/fairbnb-SeedData/Very%20Affordable%20Apartment/the-puck-penthouses-293-lafayette-street-00_jytaaq.webp',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159788/fairbnb-SeedData/Very%20Affordable%20Apartment/Pasted-image-at-2017_09_29-05_09-PM-3f451a_fjrqsc.png',
            'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159789/fairbnb-SeedData/Very%20Affordable%20Apartment/what-to-know-before-you-buy-a-condo_hnldsi.webp',
          ],
          body: faker.lorem.paragraphs(6, '<br/><br/>'),
        },

        // {
        //   authorId: 3,
        //   title: 'Immaculate Apartment',
        //   propertyType: 'Apartment',
        //   city: 'Bakersfield, CA, USA',
        //   lat: 35.393528,
        //   lng: -119.043732,
        //   price: 200,
        //   imageUrl: [
        //     'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159768/fairbnb-SeedData/Immaculate%20Apartment/7RPMLKKPBBEXIZFEAMNFPNAZ54_nx422a.jpg',
        //     'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159767/fairbnb-SeedData/Immaculate%20Apartment/A-dream-home-condo-for-sale-in-Williamsburg-Brooklyn-726325_zrgtcv.jpg',
        //     'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159767/fairbnb-SeedData/Immaculate%20Apartment/condo-for-sale-white-building-penthouse-main-living-area-brightmls_lizria.jpg',
        //     'https://res.cloudinary.com/diiwknzfk/image/upload/v1655159767/fairbnb-SeedData/Immaculate%20Apartment/100_20Barclays_202_qgrp8q.webp',
        //   ],
        //   body: faker.lorem.paragraphs(6, '<br/><br/>'),
        // },
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
