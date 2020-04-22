'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      post_author: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      post_title: {
        type: Sequelize.STRING,
      },
      post_description: {
        type: Sequelize.STRING,
      },
      post_category: {
        type: Sequelize.STRING,
      },
      post_images: {
        type: Sequelize.STRING,
      },
      post_price: {
        type: Sequelize.INTEGER,
      },
      post_starting_date: {
        type: Sequelize.DATE,
      },
      post_ending_date: {
        type: Sequelize.DATE,
      },
      post_max_guests: {
        type: Sequelize.INTEGER,
      },
      post_booked_guests: {
        type: Sequelize.INTEGER,
      },
      post_min_guests: {
        type: Sequelize.INTEGER,
      },
      post_complete: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  },
};
