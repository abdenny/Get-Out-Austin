"use strict";
module.exports = (sequelize, DataTypes) => {
  const post_guests = sequelize.define(
    "post_guests",
    {
      post_id: DataTypes.INTEGER,
      uid: DataTypes.STRING,
      quest_count: DataTypes.INTEGER,
      paid: DataTypes.BOOLEAN,
    },
    {}
  );
  post_guests.associate = function (models) {
    post_guests.belongsTo(models.posts, { foreignKey: "post_id" });
  };
  return post_guests;
};
