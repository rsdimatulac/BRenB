'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        user_id: 9,
        listing_id: 1,
        review: "The sky cabin exceeded expectations. The space is full of character with funky mid century decor and vaulted ceilings. Not to mention a stellar view! Bill was very communicative and friendly. 10/10 will visit again.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 11,
        listing_id: 1,
        review: "Bill and Melinda are wonderful hosts. The Sky Cabin was comfortable, spotless, well appointed with mid century furnishings, and has a fantastic view. We enjoyed watching the boats and float planes. We can’t wait to return!",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 10,
        listing_id: 1,
        review: "This was an awesome place to stay! Close to the city and the apartment was very cozy!",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 8,
        listing_id: 2,
        review: "Exceptional in every way. This is a sanctuary - Mark has done an absolutely incredible job curating a fantastic space inside and out!",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 7,
        listing_id: 2,
        review: "This place is such a gem! The outdoor space with hot top and sauna feel private with all of the greenery around it, and the inside is adorable (and the beds very comfortable). It was the best staycation I could ask for.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 6,
        listing_id: 2,
        review: "The spa retreat was lovely. It was a unique and relaxing experience to have a private sauna, hot tub and completely tune out the world. I would recommend as a place for a girls getaway or something similar where multiple people/couples split the cost.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 4,
        listing_id: 3,
        review: "Great home at a great price. You won't get disappointed. And yes, I can review my own listing cause why not? I'm the CEO of Airbnb. By the way, great job on the website, Renerose!",
        createdAt: new Date()
      },
      {
        user_id: 9,
        listing_id: 3,
        review: "Of course! Glad to be on your team. Thank you for the opportunity, Mr. Chesky.",
        createdAt: new Date()
      },
      {
        user_id: 5,
        listing_id: 3,
        review: "Wow. The photos of this place are nice, which is why we chose it, but the reality is even better. We’ve stayed in four different rentals in our visits to the Seattle area, and this is far and away our favorite.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 1,
        listing_id: 4,
        review: "A wonderful oasis in a great location! Lots of coffee and wonderful food nearby, also close to the Japanese gardens! Would love to visit again next time I’m in town!",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 2,
        listing_id: 4,
        review: "This place was perfect! I wish we could have stayed longer. It is super close to fun things in Capitol Hill and on a very cute street. The windows look out on a perfectly manicured yard. The bed was very comfortable.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 3,
        listing_id: 4,
        review: "This is probably the best Airbnb I've stayed at. Tasteful decoration and the bed was extra comfortable -Sundar did an amazing job with the space. I would highly recommend this spot and would definitely stay again on my next trip to the city.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 1,
        listing_id: 5,
        review: "Excellent stay. Reed was so accommodating and gave great tips for the area. The furnishings were beautiful and comfy, not to mention very clean. Nice quiet area and the location perfect.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 2,
        listing_id: 5,
        review: "House and views are beautiful! They were doing renovations on the deck so a bit loud at times but house was amazing!",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 3,
        listing_id: 5,
        review: "This place was perfect for our weekend family getaway. Reed was fantastic and was extremely attentive. The area is beautiful and there are a handful cute restaurants and market, plus Starbucks just a short walk down the road. The house was immaculate, beautiful view of Lake Washington, bedroom was quiet and cozy, pullout couch was great for our to share. The kitchen was huge and wonderful for 'home' meals when needed. Thank you!",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 4,
        listing_id: 6,
        review: "My favorite place to stay in Seattle on work trips! Great kitchen and having the gym is amazing. The space is really comfortable. Easy 3 block walk up to Phinney Ridge for great restaurants.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 5,
        listing_id: 6,
        review: "I had a wonderful stay at Jack's place! It's a cozy, thoughtfully decorated space in a convenient location. I loved the well-equipped kitchen, huge TV, and the art (and the shower tile!). I can't wait to come back someday. Highly recommended!",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 8,
        listing_id: 6,
        review: "Jack's place is a fantastic basecamp from which to experience Seattle. There are a few good eats within walking distance and it is a mellow and safe neighborhood for walks and exploring. The space is gorgeous, I fell in love with the concrete countertops and amazingly comfortable bed during my stay. Do not hesitate to book this haven!",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 7,
        listing_id: 7,
        review: "This place was spotless and thoughtfully decorated. It’s located in the perfect spot, right between Ballard, Fremont, and Queen Anne. Great view of the Magnolia Hills. The most well stocked kitchen of any airbnb I’ve stayed in, and the perfect spot for a live-work stay. So much room, and such a lovely vibe.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 9,
        listing_id: 7,
        review: "This is a beautiful and well-balanced placed to stay in Seattle. Location is great, minutes' drive from many of Seattle's best attractions and parks, and the immediate neighborhood is safe and pleasant. The interior is well-maintained and provided a comfortable long-term stay for a family. The hosts are responsive and courteous, and the front windows provide a great view over the hills of the city. Highly recommend for those looking to get a taste of Seattle.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 6,
        listing_id: 7,
        review: "Enjoyable stay and responsive host. Would definitely stay again.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 10,
        listing_id: 8,
        review: "The place was great, awesome location, most of the things I needed for a week, and the bed was super comfortable.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 11,
        listing_id: 8,
        review: "Renerose is a great host. Place is nice and modern. I heard she's a Software Engineer. I wonder if she's interested, would love to have her on my team at Apple!",
        createdAt: new Date()
      },
      {
        user_id: 9,
        listing_id: 8,
        review: "Thank you for staying at my Airbnb. And YES, I'd love to join your team! Sending my resume now.",
        createdAt: new Date()
      },
      {
        user_id: 1,
        listing_id: 9,
        review: "Fantastic place and great host! I have chosen this unit for a business trip at Seattle. The place is fully furnished and super clean. Jeff always responds quickly whenever we have questions.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 2,
        listing_id: 9,
        review: "Great place for long stays, very responsive and helpful host. A few blocks from everything.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 3,
        listing_id: 9,
        review: "Jeff's place was perfectly situated in South Lake Union (would walk down to the lake most every day), and close to Amazon HQ and some great restaurants for takeout. The place itself was immaculate and really loved the design, including the floor-to-ceiling windows and furniture taste. Highly recommend this place and may stay again sometime!",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 4,
        listing_id: 10,
        review: "We really enjoyed the sauna, the cool design, and Tim’s hospitality. The place felt totally private, but our hosts were easy to reach if we needed anything. Overall, a great stay at a unique place!",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 5,
        listing_id: 10,
        review: "This retreat is one of the best places I’ve ever visited - beautifully and artfully decorated, private and luxurious, peaceful and serene, and spotlessly clean - I truly could not have asked for a better place to rest after a long day of travel and apartment hunting.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      },
      {
        user_id: 6,
        listing_id: 10,
        review: "Great place. Would love to stay here again. Tim was an exceptional host! I hope he gives me the new iPhone because of this review.",
        createdAt: faker.date.between('2020-11-27', '2021-05-03')
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
