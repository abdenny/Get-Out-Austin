import db from '../../../models';

export function addPostGuest(req, res) {
  let post_id = req.body.post_id;
  let uid = req.body.uid;
  let guest_count = req.body.guest_count;
  let paid = req.body.paid;

  //Creation of post checks if their party can fit in the posting guest limit before creating.
  db.posts.findAll({ where: { id: post_id } }).then((results) => {
    let canFitGuest =
      results.post_booked_guests + guest_count > results.post_max_guests
        ? false
        : true;
    if (canFitGuest) {
      //If can fit guest than create post_guest listing
      addPostGuest();
    } else {
      //Server caught too many guests being added. Hacker or problem in client.
      res.send(
        JSON.stringify(
          "Sorry, the amount of guests you are booking exceeds the posting's limit."
        )
      );
    }
  });

  let addPostGuest = () => {
    db.post_guests
      .create({
        post_id,
        uid,
        guest_count,
        paid,
      })
      .then((result) => {
        JSON.stringify(result);
      })
      .catch((err) => {
        console.log(err);
        JSON.stringify('Error found: ', err);
      });
  };
}
