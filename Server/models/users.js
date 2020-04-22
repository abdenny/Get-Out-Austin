'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      user_first_name: DataTypes.STRING,
      user_last_name: DataTypes.STRING,
      user_email_address: DataTypes.STRING,
    },
    {}
  );
  users.associate = function (models) {
    users.hasMany(models.post_guests, { foreignKey: 'user_id' });

    users.hasMany(models.posts, { foreignKey: 'post_author' });
  };
  return users;
};
