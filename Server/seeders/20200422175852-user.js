'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          user_first_name: 'Austin',
          user_last_name: 'Denny',
          user_email_address: 'austin@getoutaustin.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          user_first_name: 'Austin',
          user_last_name: 'Denny',
          user_email_address: 'austin@getoutaustin.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
};
