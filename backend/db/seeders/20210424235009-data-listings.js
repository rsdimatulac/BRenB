'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Listings', [
      { // 1
        title: 'Sky Cabin Apartment with Views',
        description: "The Sky Cabin is a stunning, serene, and cozy apartment in the heart of Seattle, with vaulted ceilings, wood paneling, mid-century decor, and a heated bathroom tile floor. Enjoy a private space on the 3rd level of a lovingly cared for home in a quiet neighborhood on the shores of Lake Union, the lake featured in the movie Sleepless in Seattle. From the patio and almost every window you'll relish watching the seaplanes, boats, sunsets, and even eagles.",
        type: 'Entire apartment',
        host_id: 2, // Bill Gates
        price: 117,
        num_guests: 2,
        num_beds: 1,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.64339,
        longitude: -122.32582,
        rating: 4.98
      },
      { // 2
        title: 'Spa Retreat with Finnish Sauna and Saltwater Hot Tub',
        description: 'Indulge in a genuine Finnish sauna and shower outdoors surrounded by bamboo in this luxurious spa retreat just 15 minutes from downtown Seattle. Visit our resident bunny, nap in a loft bedroom, or relax outside among the greenery.',
        type: 'Entire apartment',
        host_id: 3, // Mark Zuckerberg
        price: 199,
        num_guests: 4,
        num_beds: 3,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.69585,
        longitude: -122.35936,
        rating: 4.99
      },
      { // 3
        title: 'Two-Bedroom Charmer Surrounded by Seattle Faves',
        description: 'Soak up the serenity of this updated 100-year old Craftsman home. The private first-floor apartment boasts eclectic furnishings and decor, splashes of bright color throughout, contrasting rustic modern finishes, and an exclusive guest patio.',
        type: 'Entire apartment',
        host_id: 4, // Brian Chesky
        price: 180,
        num_guests: 6,
        num_beds: 2,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.66713,
        longitude: -122.32512,
        rating: 4.99
      },
      { // 4
        title: 'Bright Basement Apartment with Garden Patio',
        description: 'Wake up feeling recharged in this open-plan and cozy apartment ideal for lounging. Experience a private retreat just minutes from the city with a contemporary design interior, a private backyard BBQ area, and an outdoor dining space.',
        type: 'Entire apartment',
        host_id: 5, // Sundar Pichai
        price: 107,
        num_guests: 3,
        num_beds: 1,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.61366,
        longitude: -122.30001,
        rating: 4.99
      },
      { // 5
        title: 'Lake Washington Home Steps from Leschi Shops!',
        description: 'Stunning lake and mountain views await at this Seattle vacation rental in the Leschi neighborhood. With 1 bedroom, 1 full bathroom, a large walk-in closet, fully equipped kitchen, and a modern living space, this apartment for 4 guests features a fantastic location on the Lake Washington waterfront.',
        type: 'Entire home',
        host_id: 6, // Reed Hastings
        price: 149,
        num_guests: 4,
        num_beds: 2,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.59941,
        longitude: -122.28785,
        rating: 5.0
      },
      { // 6
        title: "Jack's Garden Getaway for 1 or 2",
        description: "Tucked away in a quiet, historic Phinney Ridge neighborhood, your modern, fully equipped one bedroom is located in the garden level of an updated 1909 farmhouse. Make a meal in a fully equipped kitchen, sleep in a bed you won't want to get out of, relax in the living room and play the guitar or have a workout in your private gym.Enjoy the garden views from every window.",
        type: 'Entire home',
        host_id: 7, // Jack Dorsey
        price: 189,
        num_guests: 2,
        num_beds: 1,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.67367,
        longitude: -122.35757,
        rating: 5.0
      },
      { // 7
        title: 'Elegant Top Floor Apartment with View and Parking',
        description: 'Modern, bright and quiet apartment perfectly located in safe Queen Anne neighborhood. Easy access to Downtown, Ballard, Magnolia, Fremont, Queen Anne, SPU. Walk to coffee, groceries and food. Near RapidRide D bus line. Free & convenient assigned parking.',
        type: 'Entire home',
        host_id: 8, // Elon Musk
        price: 114,
        num_guests: 6,
        num_beds: 3,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.65049,
        longitude: -122.37528,
        rating: 5.0
      },
      { // 8
        title: 'Modern One Bedroom in South Lake Union',
        description: 'Truly urban living at its finest at this Brand New property. This apartment boasts a modern design and all the comforts you need. Catch beautiful views of the cityscape and Space Needle from the rooftop terrace or take advantage of excellent shopping, dining and nightlife - all within short walking and biking distance.',
        type: 'Entire apartment',
        host_id: 9, // Renerose Dimatulac
        price: 129,
        num_guests: 4,
        num_beds: 1,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.62248,
        longitude: -122.34279,
        rating: 4.87
      },
      { // 9
        title: 'South Lake Union Modern and Pet-Friendly Apartment',
        description: 'Truly urban living at its finest at this brand new property in South Lake Union. Catch beautiful views of the cityscape and Space Needle from the rooftop terrace or take advantage of excellent shopping, dining and nightlife - all within short walking and biking distance. Hop over to the waterfront for iconic experiences like Pike Place Market, the Seattle aquarium and several museums.',
        type: 'Entire apartment',
        host_id: 10, // Jeff Bezos
        price: 129,
        num_guests: 2,
        num_beds: 1,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.62248,
        longitude: -122.34279,
        rating: 4.98
      },
      { // 10
        title: 'Stylish Apartment with Private Rooftop Deck and Sauna',
        description: 'Retreat to this private, architect designed 2nd floor apartment in a walkable neighborhood just 7 miles from downtown Seattle. This colorful, light-filled space boasts classic MC furniture, bold accent walls, audiophile stereo and complimentary cocktail bar. Climb a few more stairs to discover the rejuvenating and relaxing properties of a state-of-the-art Finnish sauna in your own private roof top retreat. Plush robes, towels, and spa sandals await.',
        type: 'Entire apartment',
        host_id: 11, // Tim Cook
        price: 130,
        num_guests: 3,
        num_beds: 1,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.69567,
        longitude: -122.35797,
        rating: 5.0
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Listings', null, {});
  }
};
