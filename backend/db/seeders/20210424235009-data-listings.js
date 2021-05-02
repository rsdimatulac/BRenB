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
      { // 11
        title: 'Waterfront Condo in Seattle. A Rare Find!',
        description: "Over 1000 square feet of relaxing, well equipped perfection nestled at the base of Pike Place Market, across the street from the Seattle Aquarium and Pier 62. Finished in a decor reminiscent of Seattle's early days, with red-brick accent walls, esspresso wood floors, and subway tiled bathroom.",
        type: 'Entire condominium',
        host_id: 12, // Susan Wojcicki
        price: 243,
        num_guests: 4,
        num_beds: 1,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.60888,
        longitude: -122.3437,
        rating: 5.0
      },
      { // 12
        title: 'Greenlake Craftsman Home with Hot Tub & Garden',
        description: "Our beautifully maintained 3 bedroom, 2 bath craftsman home is in one of Seattle's most desirable neighborhoods. It is nestled in a quiet and residential area of Greenlake and is a few blocks from the popular Green Lake Park and many restaurants, cafes, and shops. The University of Washington and Woodland Park Zoo are close by.Enjoy the privacy of our large fenced backyard with hot tub, gas fire pit, and eat-in patio and BBQ. The large open concept kitchen is fully equipped with every amenity.",
        type: 'Entire house',
        host_id: 13, // Lisa Su
        price: 390,
        num_guests: 6,
        num_beds: 3,
        num_baths: 2,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.66643,
        longitude: -122.33618,
        rating: 5.0
      },
      { // 13
        title: 'Art-Filled Industrial Loft in South Lake Union',
        description: 'Admire modern art throughout a chic loft flooded with natural light courtesy of double height floor-to-ceilings windows. Polished concrete floors, walnut cabinetry, access to a patio and roof deck, and more—enjoy this unique and luxurious retreat.',
        type: 'Entire loft',
        host_id: 14, // Margaret Keane
        price: 120,
        num_guests: 4,
        num_beds: 1,
        num_baths: 1.5,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.62171,
        longitude: -122.33888,
        rating: 4.97
      },
      { // 14
        title: 'City Garden Retreat in Vibrant Walkable Neighborhood',
        description: "Step down into this peaceful lower level apartment surrounded by lush greenery. Discover a calming retreat featuring a private entrance, an open-plan living area, modern furnishings, and a unique stonework patio. Stroll the tree lined streets with spectacular city views and explore the neighborhood's easy access to parks, restaurants, a full grocery store and shops all within walking distance.",
        type: 'Entire apartment',
        host_id: 15, // Safra Cruz
        price: 117,
        num_guests: 3,
        num_beds: 2,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.65735,
        longitude: -122.33903,
        rating: 4.99
      },
      { // 15
        title: 'Capitol Hill home with great views',
        description: 'This top floor, spacious, light-filled one bedroom apartment is in a perfect location on Capitol Hill. From the living room there is a peekaboo view of the Space Needle, the Seattle skyline and on a clear day, the water and mountain range. New, modern décor in a completely renovated one bedroom flat. Luxurious linens on a 5 star hotel-quality bed, along with tasteful furnishings make this the perfect getaway.',
        type: 'Entire apartment',
        host_id: 16, // Carol Tome
        price: 129,
        num_guests: 4,
        num_beds: 1,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.62242,
        longitude: -122.32515,
        rating: 4.75
      },
      { // 16
        title: 'Belltown Studio close to Space Needle',
        description: 'Cook seafood from the Pike Place Market in the well-stocked galley kitchen, with its Whirlpool appliances. Stay in shape without leaving the building, thanks to an indoor pool, hot tub, and fitness room. BBQ on the rooftop overlooking Puget Sound. Washer and dryer inside the condo!',
        type: 'Entire condominium',
        host_id: 17, // Kevin Systrom
        price: 155,
        num_guests: 2,
        num_beds: 1,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.61564,
        longitude: -122.34781,
        rating: 5.0
      },
      { // 17
        title: 'City water view Oasis in the heart of Seattlt',
        description: 'Enjoy the sunset while tasting wine and watching ferries go by on Puget Sound from your private balcony. You are close to everything while staying here. Let the heart of Seattle embrace you for what it can delightfully offer. Most of all, kick back and relax, enjoy the views, and have a great time!',
        type: 'Entire condominium',
        host_id: 18, // Reshma Saujani
        price: 126,
        num_guests: 4,
        num_beds: 2,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.61449,
        longitude: -122.34794,
        rating: 4.96
      },
      { // 18
        title: 'Colorful and Stylish Studio with a Private Garden',
        description: 'Soak up the charm of this unique studio apartment fitted with stylish, contemporary furnishings and oodles of character. Morning coffee just seems to taste better in the lush, green garden or nuzzled in the cozy reading nook next to the fireplace.',
        type: 'Entire guest suite',
        host_id: 19, // Kimberly Bryant
        price: 125,
        num_guests: 2,
        num_beds: 1,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.70861,
        longitude: -122.3138,
        rating: 4.98
      },
      { // 19
        title: 'Bright Lower Queen Anne Studio w/ Gym',
        description: 'Show up and start living from day one in Seattle with this stylish studio Blueground apartment. You’ll love coming home to this thoughtfully furnished, beautifully designed, and fully-equipped Belltown home with stunning views over the city.',
        type: 'Entire apartment',
        host_id: 20, // Ryan Roslansky
        price: 128,
        num_guests: 2,
        num_beds: 1,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.61986,
        longitude: -122.35501,
        rating: 4.99
      },
      { // 20
        title: 'Queen Anne Loft with Space Needle View',
        description: "Take a moment to read the messages in the fun collection of art sketches hanging over the dining area. Floor-to-ceiling-windows ensure there's plentiful light, while nice touches include the letter and number textured 3D wall by the spiral staircase.",
        type: 'Entire guest suite',
        host_id: 9, // Bill Gates
        price: 148,
        num_guests: 2,
        num_beds: 1,
        num_baths: 1,
        city: 'Seattle',
        state: 'Washington',
        latitude: 47.62633,
        longitude: -122.35372,
        rating: 4.99
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Listings', null, {});
  }
};
