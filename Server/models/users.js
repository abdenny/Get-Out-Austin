"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      user_first_name: DataTypes.STRING,
      user_last_name: DataTypes.STRING,
      user_email_address: DataTypes.STRING,
    },
    {}
  );
  users.associate = function (models) {};
  return users;
};
