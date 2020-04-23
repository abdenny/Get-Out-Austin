import db from "../../../models";

export function addPosts(req, res) {
  let post_author = req.body.post_author;
  let post_title = req.body.post_title;
  let post_description = req.body.post_description;
  let post_category = req.body.post_category;
  let post_images = req.body.post_images;
  let post_price = req.body.post_price;
  let post_starting_date = req.body.post_starting_date;
  let post_ending_date = req.body.post_ending_date;
  let post_max_guests = req.body.post_max_guests;
  let post_booked_guests = 0;
  let post_min_guests = req.body.post_min_guests;
  let post_complete = false;

  //Check if the posting is a duplicate (author has posting with same title)
  db.posts.findAll({ where: { post_author: post_author } }).then((results) => {
    let notDuplicate = results.post_title === results.post_title ? false : true;
    if (notDuplicate) {
      createPost();
    } else {
      res.send(
        JSON.stringify("Sorry, the posting you added seems to be a duplicate.")
      );
    }
  });

  let createPost = () => {
    db.posts
      .create({
        post_author,
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
      })
      .then((results) => {
        res.send(JSON.stringify(results));
      })
      .catch((err) => {
        console.log(err);
        res.send(JSON.stringify("Error: ", err));
      });
  };
}
