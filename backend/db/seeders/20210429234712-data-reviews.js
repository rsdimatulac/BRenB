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
      },
      {
        user_id: 7,
        listing_id: 11,
        review: "Beautiful condo right near the waterfront. All the amenities of home and within walking distance to Pike’s Market and the wharf. Excellent location! I definitely recommend Susan’s place!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 8,
        listing_id: 11,
        review: "Everything was great! Susan was so quick to answer all questions and even provided tips for things to see and do. Would definitely stay here again! Great location to so many Seattle attractions. Thank you for everything!!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 9,
        listing_id: 11,
        review: "Great host! Extremely accommodating, goes above and beyond the expectations of host. Quick responses and great communication. Prime location for anyone trying to get a feel for Seattle. Located near the water with main attractions close by. Unit was as host described. Would recommend.",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 10,
        listing_id: 12,
        review: "Can’t beat the location - green lake is perfect neighborhood to stay and relax plus get to anywhere in Seattle. Thanks for a cozy comfortable home!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 11,
        listing_id: 12,
        review: "An amazing property in an amazing city. Especially loved that we could walk to the grocery store and Uber virtually anywhere. Great hosts who were very accommodating and would definitely stay again.",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 14,
        listing_id: 12,
        review: "This home was perfectly clean and spacious! There was a chalkboard in the kitchen with recommendations for restaurants and activities nearby. The Green Lake neighborhood is a beautiful place to stay in and I would recommend this home to anyone.",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 15,
        listing_id: 13,
        review: "Margaret’s place was great! Me and my husband enjoyed our stay for his birthday, it’s stylish, close to everything in the city from food to shopping. And everything was needed for our stay will definitely stay again and suggest if your looking for a romantic getaway to book!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 13,
        listing_id: 13,
        review: "The loft was meticulously decorated and was a treat to stay at. The lighting was incredible and the blinds/shades that come down from the ceiling were so nice for privacy. Margaret was incredibly helpful and detailed in his communication. I’d highly recommend staying here.",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 16,
        listing_id: 13,
        review: "Great place! we loved our stay! in the heart of everything, tons withinh walking distance or 5-10 min drive. nice decor and lovely place to stay! definitely will come again if we come back Seattle!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 14,
        listing_id: 14,
        review: "The perfect Sirbnb, private and quiet yet close to everything. Safra was very helpful and attentive but not overbearing. The place was clean and had everything we needed. I would definitely stay here again!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 17,
        listing_id: 14,
        review: "Very charming, detailed oriented, and clean space with a beautiful garden in an excellent location/neighborhood. Easy parking. Walkable to great restaurants and the best ice cream shop. Plus the delicious homemade granola added the special touch. Definitely would return.",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 18,
        listing_id: 14,
        review: "We had a wonderful time at the city garden retreat. It was a cozy oasis in the middle of the big city. Safra is an excellent host that made us feel right at home. The apartment was clean and inviting and had everything we needed to enjoy our stay. We will definitely be back!!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 19,
        listing_id: 15,
        review: "Great location, amazing view and very clean and equipped. Highly recommend.",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 20,
        listing_id: 15,
        review: "Great location!! Everything was really in walking distance with a lot of great food options. The place itself was very clean and quite. Communication was great and they even let me check in early!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 2,
        listing_id: 15,
        review: "This place was great! Perfect stay for my needs. Carol was always very responsive and so helpful whenever we needed something. The place is spacious and has a great view of the Space anwedle and the mountains! Bed is super comfy and everything is very modern and beautiful! Definitely recommend!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 3,
        listing_id: 16,
        review: "We truly enjoyed our stay. Kevin is a wonderful host. He pays attention to detail and goes above and beyond to accommodate needs. It is comfy and stylish and conveniently located. We plan to stay here again in the future.",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 4,
        listing_id: 16,
        review: "Kevin's place is beautiful and clean close to great destinations in Seattle. He gives recommendations on good places to go in the city. Excellent very nice & helpful host.",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 5,
        listing_id: 16,
        review: "We stayed here for 3 nights and it was a great stay! The location is right in Belltown so we were about a 15 minute walk from all our destinations or an easy 15 min drive from some of the farther spots like Capitol Hill.",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 6,
        listing_id: 17,
        review: "Enjoyed my stay! Really nice place.",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 7,
        listing_id: 17,
        review: "The host is great, very responsive. The views are amazing. Would stay here again!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 8,
        listing_id: 17,
        review: "This place is close to everything. Definitely located in the hear of Seattle. I highly recommend this home. ",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 9,
        listing_id: 18,
        review: "Amazing place to stay!! So lovely and after a long day / flight there was some food and snacks in the kitchen which just made everything so much better. Would highly recommend!! And the fireplace was so cozy",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 10,
        listing_id: 18,
        review: "We stayed 3 nights at this quiet, private Airbnb and had a great experience. The location is perfect, it is close to shopping and restaurants but is also set in a quite neighborhood with private access. The accommodations were very nice, very nicely maintained with everything we needed. I would definitely recommend this to anyone and would definitely stay here again.",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 11,
        listing_id: 18,
        review: "The place WAS AWESOME! Would definitely stay again!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 12,
        listing_id: 19,
        review: "I really enjoyed staying here. The place was great. Exactly what I needed for a month. Clean, well kept and it was a pleasure to stay here. I would strong recommend.",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 9,
        listing_id: 19,
        review: "The place is fully-equipped. Ryan did an awesome job designing this home. 5 stars!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 15,
        listing_id: 19,
        review: "What a beautifully designed space in a lovely building with a stunning view. Oh, and the location is PERFECT too!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 14,
        listing_id: 20,
        review: "I am a frequent Seattle visitor and felt very comfortable in a scenic space with a caring and accessible host. I would happily stay again!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 16,
        listing_id: 20,
        review: "This is a great spot with awesome skyline views and was near many great coffee shops. The place itself was full of character and really well designed.",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
      {
        user_id: 17,
        listing_id: 20,
        review: "I am a frequent Seattle visitor and felt very comfortable in a scenic space with a caring and accessible host. I would happily stay again!",
        createdAt: faker.date.between('2020-01-01', '2021-05-03')
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
