'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Bill',
        lastName: 'Gates',
        email: 'billgates@gmail.com',
        username: 'billgates',
        hashedPassword: bcrypt.hashSync('Microsoft1!'),
        avatar: "https://deadline.com/wp-content/uploads/2018/02/bill-gates-2.jpg?w=792",
        bio: 'Founder of Microsoft. Billionaire by day, Airbnb Host by night.',
        createdAt: faker.datatype.datetime()
      },
      {
        firstName: 'Mark',
        lastName: 'Zuckerberg',
        email: 'markzuckerberg@gmail.com',
        username: 'markzuckerberg',
        hashedPassword: bcrypt.hashSync('Facebook1!'),
        avatar: "https://about.fb.com/wp-content/uploads/2019/01/mz.jpg?fit=4655%2C3102",
        bio: 'CEO of Facebook. Part-time Airbnb Host.',
        createdAt: faker.datatype.datetime()
      },
      {
        firstName: 'Brian',
        lastName: 'Chesky',
        email: 'brianchesky@gmail.com',
        username: 'brianchesky',
        hashedPassword: bcrypt.hashSync('Airbnb1!'),
        avatar: "https://news.airbnb.com/wp-content/uploads/sites/4/2016/10/140602_AirBnb_Brian_3837_SquareCrop.jpg",
        bio: 'CEO of Airbnb. I host my own home.',
        createdAt: new Date('2008-08-01')
      },
      {
        firstName: 'Sundar',
        lastName: 'Pichai',
        email: 'sundarpichai@gmail.com',
        username: 'sundarpichai',
        hashedPassword: bcrypt.hashSync('Google1!'),
        avatar: "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
        bio: 'CEO of Google. A for Alphabet.',
        createdAt: faker.datatype.datetime()
      },
      {
        firstName: 'Reed',
        lastName: 'Hastings',
        email: 'reedhastings@gmail.com',
        username: 'reedhastings',
        hashedPassword: bcrypt.hashSync('Netflix1!'),
        avatar: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1179797765%2F0x0.jpg",
        bio: 'CEO of Netflix. My airbnb is perfect to do Netflix and chill.',
        createdAt: faker.datatype.datetime()
      },
      {
        firstName: 'Jack',
        lastName: 'Dorsey',
        email: 'jackdorsey@gmail.com',
        username: 'jackdorsey',
        hashedPassword: bcrypt.hashSync('Twitter1!'),
        avatar: "https://www.adweek.com/wp-content/uploads/2020/10/1026-jack-dorsey-digital-hotlis-16x9-2020-1.jpg",
        bio: 'CEO of Twitter. Follow me on Twitter!',
        createdAt: faker.datatype.datetime()
      },
      {
        firstName: 'Elon',
        lastName: 'Musk',
        email: 'elonmusk@gmail.com',
        username: 'elonmusk',
        hashedPassword: bcrypt.hashSync('Tesla01!'),
        avatar: "https://i.insider.com/606490f4daf0f10018f99353?width=700&format=jpeg&auto=webp",
        bio: 'CEO of Tesla. Proud father of X Æ A-12.',
        createdAt: faker.datatype.datetime()
      },
      {
        firstName: 'Renerose',
        lastName: 'Dimatulac',
        email: 'rsdimatulac@gmail.com',
        username: 'rdimatulac',
        hashedPassword: bcrypt.hashSync('Banana1!'),
        avatar: "https://avatars.githubusercontent.com/u/76712928?v=4",
        bio: 'Pilot turned Software Engineer.',
        createdAt: faker.datatype.datetime()
      },
      {
        firstName: 'Jeff',
        lastName: 'Bezos',
        email: 'jeffbezos@gmail.com',
        username: 'jeffbezos',
        hashedPassword: bcrypt.hashSync('Amazon1!'),
        avatar: "https://chiefexecutive.net/wp-content/uploads/2018/09/bezos-final-0404-compressor-e1536084406403.jpg",
        bio: 'CEO of Amazon. Work for me.',
        createdAt: faker.datatype.datetime()
      },
      {
        firstName: 'Tim',
        lastName: 'Cook',
        email: 'timcook@gmail.com',
        username: 'timcook1',
        hashedPassword: bcrypt.hashSync('Apple01!'),
        avatar: "https://content.fortune.com/wp-content/uploads/2015/03/9826_01_0153.jpg",
        bio: 'Pilot turned Software Engineer.',
        createdAt: faker.datatype.datetime()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
