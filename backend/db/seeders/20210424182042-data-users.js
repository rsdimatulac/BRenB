'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { // 2
        firstName: 'Bill',
        lastName: 'Gates',
        email: 'billgates@gmail.com',
        username: 'billgates',
        hashedPassword: bcrypt.hashSync('Microsoft1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-2.jpg",
        bio: 'Founder of Microsoft. Billionaire by day, Airbnb Host by night.',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 3
        firstName: 'Mark',
        lastName: 'Zuckerberg',
        email: 'markzuckerberg@gmail.com',
        username: 'markzuckerberg',
        hashedPassword: bcrypt.hashSync('Facebook1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-3.jpg",
        bio: 'CEO of Facebook. Part-time Airbnb Host.',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 4
        firstName: 'Brian',
        lastName: 'Chesky',
        email: 'brianchesky@gmail.com',
        username: 'brianchesky',
        hashedPassword: bcrypt.hashSync('Airbnb1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-4.jpg",
        bio: 'CEO of Airbnb. I host my own home.',
        createdAt: new Date('2008-08-01')
      },
      { // 5
        firstName: 'Sundar',
        lastName: 'Pichai',
        email: 'sundarpichai@gmail.com',
        username: 'sundarpichai',
        hashedPassword: bcrypt.hashSync('Google1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-5.jpg",
        bio: 'CEO of Google. A for Alphabet.',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 6
        firstName: 'Reed',
        lastName: 'Hastings',
        email: 'reedhastings@gmail.com',
        username: 'reedhastings',
        hashedPassword: bcrypt.hashSync('Netflix1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-6.jpg",
        bio: 'CEO of Netflix. My airbnb is perfect to do Netflix and chill.',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 7
        firstName: 'Jack',
        lastName: 'Dorsey',
        email: 'jackdorsey@gmail.com',
        username: 'jackdorsey',
        hashedPassword: bcrypt.hashSync('Twitter1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-7.jpg",
        bio: 'CEO of Twitter. Follow me on Twitter!',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 8
        firstName: 'Elon',
        lastName: 'Musk',
        email: 'elonmusk@gmail.com',
        username: 'elonmusk',
        hashedPassword: bcrypt.hashSync('Tesla01!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-8.jpeg",
        bio: 'CEO of Tesla. Proud father of X Æ A-12.',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 9
        firstName: 'Renerose',
        lastName: 'Dimatulac',
        email: 'rsdimatulac@gmail.com',
        username: 'rdimatulac',
        hashedPassword: bcrypt.hashSync('Banana1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-9.jpg",
        bio: 'Pilot turned Software Engineer.',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 10
        firstName: 'Jeff',
        lastName: 'Bezos',
        email: 'jeffbezos@gmail.com',
        username: 'jeffbezos',
        hashedPassword: bcrypt.hashSync('Amazon1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-10.jpg",
        bio: 'CEO of Amazon. Work for me.',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 11
        firstName: 'Tim',
        lastName: 'Cook',
        email: 'timcook@gmail.com',
        username: 'timcook1',
        hashedPassword: bcrypt.hashSync('Apple01!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-11.jpg",
        bio: 'CEO of Apple.',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 12
        firstName: 'Susan',
        lastName: 'Wojcicki',
        email: 'susanwojcicki@gmail.com',
        username: 'susanwojcicki',
        hashedPassword: bcrypt.hashSync('Youtube1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-12.jpg",
        bio: "CEO of YouTube. I'm the writer of 'How To Break up the Silicon Valley Boys' Club'.",
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 13
        firstName: 'Lisa',
        lastName: 'Su',
        email: 'lisasu@gmail.com',
        username: 'lisasuamd',
        hashedPassword: bcrypt.hashSync('LisaAMD1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-13.jpg",
        bio: 'President and CEO of AMD. Best host in town!',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 14
        firstName: 'Margaret',
        lastName: 'Keane',
        email: 'margaretkeane@gmail.com',
        username: 'margaretkeane',
        hashedPassword: bcrypt.hashSync('Synchrony1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-14.jpg",
        bio: "CEO of Synchrony Financial. I'm the kind of host who'll bake you cookies.",
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 15
        firstName: 'Safra',
        lastName: 'Catz',
        email: 'safracatz@gmail.com',
        username: 'safracatz',
        hashedPassword: bcrypt.hashSync('Oracle1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-15.jpg",
        bio: 'CEO of Oracle.',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 16
        firstName: 'Carol',
        lastName: 'Tomé',
        email: 'caroltome@gmail.com',
        username: 'caroltome',
        hashedPassword: bcrypt.hashSync('UPSups1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-16.jpg",
        bio: 'CEO of UPS. No downs, only UPS.',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 17
        firstName: 'Kevin',
        lastName: 'Systrom',
        email: 'kevinsystrom@gmail.com',
        username: 'kevinsystrom',
        hashedPassword: bcrypt.hashSync('Instagram1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-17.jpg",
        bio: 'Founder of Instagram. Rent my place and mention me on IG!',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 18
        firstName: 'Reshma',
        lastName: 'Saujani',
        email: 'reshmasaujani@gmail.com',
        username: 'reshmasaujani',
        hashedPassword: bcrypt.hashSync('GirlsWhoCode1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-18.png",
        bio: 'CEO of Girls Who Code. Need more women in tech! But first, rent my place.',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 19
        firstName: 'Kimberly',
        lastName: 'Bryant',
        email: 'kimberlybryant@gmail.com',
        username: 'kimberlybryant',
        hashedPassword: bcrypt.hashSync('BlackGirlsCode1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-19.jpg",
        bio: 'Founder and CEO of Black Girls Code.',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
      { // 20
        firstName: 'Ryan',
        lastName: 'Roslansky',
        email: 'ryanroslansky@gmail.com',
        username: 'ryanroslansky',
        hashedPassword: bcrypt.hashSync('LinkedIn1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-20.jpeg",
        bio: 'CEO of LinkedIn. Get connected and rent my home!',
        createdAt: faker.date.between('2016-11-27', '2021-05-03')
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
