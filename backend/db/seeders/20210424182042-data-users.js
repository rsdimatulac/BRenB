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
        createdAt: faker.datatype.datetime()
      },
      { // 3
        firstName: 'Mark',
        lastName: 'Zuckerberg',
        email: 'markzuckerberg@gmail.com',
        username: 'markzuckerberg',
        hashedPassword: bcrypt.hashSync('Facebook1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-3.jpg",
        bio: 'CEO of Facebook. Part-time Airbnb Host.',
        createdAt: faker.datatype.datetime()
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
        createdAt: faker.datatype.datetime()
      },
      { // 6
        firstName: 'Reed',
        lastName: 'Hastings',
        email: 'reedhastings@gmail.com',
        username: 'reedhastings',
        hashedPassword: bcrypt.hashSync('Netflix1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-6.jpg",
        bio: 'CEO of Netflix. My airbnb is perfect to do Netflix and chill.',
        createdAt: faker.datatype.datetime()
      },
      { // 7
        firstName: 'Jack',
        lastName: 'Dorsey',
        email: 'jackdorsey@gmail.com',
        username: 'jackdorsey',
        hashedPassword: bcrypt.hashSync('Twitter1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-7.jpg",
        bio: 'CEO of Twitter. Follow me on Twitter!',
        createdAt: faker.datatype.datetime()
      },
      { // 8
        firstName: 'Elon',
        lastName: 'Musk',
        email: 'elonmusk@gmail.com',
        username: 'elonmusk',
        hashedPassword: bcrypt.hashSync('Tesla01!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-8.jpeg",
        bio: 'CEO of Tesla. Proud father of X Æ A-12.',
        createdAt: faker.datatype.datetime()
      },
      { // 9
        firstName: 'Renerose',
        lastName: 'Dimatulac',
        email: 'rsdimatulac@gmail.com',
        username: 'rdimatulac',
        hashedPassword: bcrypt.hashSync('Banana1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-9.jpg",
        bio: 'Pilot turned Software Engineer.',
        createdAt: faker.datatype.datetime()
      },
      { // 10
        firstName: 'Jeff',
        lastName: 'Bezos',
        email: 'jeffbezos@gmail.com',
        username: 'jeffbezos',
        hashedPassword: bcrypt.hashSync('Amazon1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-10.jpg",
        bio: 'CEO of Amazon. Work for me.',
        createdAt: faker.datatype.datetime()
      },
      { // 11
        firstName: 'Tim',
        lastName: 'Cook',
        email: 'timcook@gmail.com',
        username: 'timcook1',
        hashedPassword: bcrypt.hashSync('Apple01!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-11.jpg",
        bio: 'CEO of Apple.',
        createdAt: faker.datatype.datetime()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
