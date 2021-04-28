'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { // 1
        firstName: 'Guest',
        lastName: 'User',
        email: 'guestuser@gmail.com',
        username: 'guestuser',
        hashedPassword: bcrypt.hashSync('Password1!'),
        avatar: "https://brenb.s3.amazonaws.com/avatars/user-1.jpg",
        bio: 'I am the guest user. Welcome to Airbnb!'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};