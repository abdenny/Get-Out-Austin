'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define(
    'posts',
    {
      uid: DataTypes.STRING,
      post_title: DataTypes.STRING,
      post_description: DataTypes.STRING,
      post_category: DataTypes.STRING,
      post_images: DataTypes.STRING,
      post_price: DataTypes.INTEGER,
      post_starting_date: DataTypes.DATE,
      post_ending_date: DataTypes.DATE,
      post_max_guests: DataTypes.INTEGER,
      post_booked_guests: DataTypes.INTEGER,
      post_min_guests: DataTypes.INTEGER,
      post_complete: DataTypes.BOOLEAN,
      Lat: DataTypes.STRING,
      Lon: DataTypes.STRING,
      image_avatar: DataTypes.STRING,
      mapbox_description: DataTypes.STRING,
    },
    {}
  );
  posts.associate = function (models) {
    // associations can be defined here
    posts.hasMany(models.post_guests, { foreignKey: 'post_id' });
  };
  return posts;
};
