'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('posts', 'Lat', {
      type: Sequelize.INTEGER,
    });
  },

  down: (queryInterface, Sequelize) => {},
};
