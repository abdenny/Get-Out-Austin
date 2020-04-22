'use strict';
module.exports = (sequelize, DataTypes) => {
  const post_guests = sequelize.define(
    'post_guests',
    {
      post_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      quest_count: DataTypes.INTEGER,
      paid: DataTypes.BOOLEAN,
    },
    {}
  );
  post_guests.associate = function (models) {
    post_guests.belongsTo(models.users, { foreignKey: 'user_id' });
    post_guests.belongsTo(models.posts, { foreignKey: 'post_id' });
  };
  return post_guests;
};
