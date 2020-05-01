import db from '../../../models';

export function addPosts(req, res) {
  //Need to get the uid from the user firebase object, set to 1.
  let uid = req.body.uid;
  let post_title = req.body.title;
  let post_description = req.body.description;
  let post_category = req.body.category;
  let post_images = req.body.photos;
  let post_price = req.body.price;
  let post_starting_date = req.body.date_range[0];
  let post_ending_date = req.body.date_range[1];
  let post_max_guests = req.body.guest_range[1];
  let post_booked_guests = 0;
  let post_min_guests = req.body.guest_range[0];
  let Lat = req.body.Lat;
  let Lon = req.body.Lon;
  let mapbox_description = req.body.mapbox_description;
  let image_avatar = req.body.image_avatar;
  let post_complete = false;

  let createPost = () => {
    db.posts
      .create({
        uid,
        post_title,
        post_description,
        post_category,
        post_images,
        post_price,
        post_starting_date,
        post_ending_date,
        post_max_guests,
        post_booked_guests,
        post_min_guests,
        post_complete,
        Lat,
        Lon,
        mapbox_description,
        image_avatar,
      })
      .then((results) => {
        res.send(JSON.stringify(results));
      })
      .catch((err) => {
        console.log(err);
        res.send(JSON.stringify('Error: ', err));
      });
  };

  //Check if the posting is a duplicate (author has posting with same title)
  db.posts.findAll({ where: { uid: uid } }).then((results) => {
    let notDuplicate = true;
    // let notDuplicate = results[0].post_title === post_title ? false : true;
    if (notDuplicate) {
      console.log('...creating posting.');
      createPost();
    } else {
      console.log('...duplicate found.');
      res.send(
        JSON.stringify('Sorry, the posting you added seems to be a duplicate.')
      );
    }
  });
}
