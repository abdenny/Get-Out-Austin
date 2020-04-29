import db from "../../../models";

export function addPostGuest(req, res) {
  let post_id = req.body.post_id;
  let uid = req.body.uid;
  let quest_count = req.body.quest_count;
  let paid = req.body.paid;

  //Creation of post checks if their party can fit in the posting guest limit before creating.
  db.posts.findAll({ where: { id: post_id } }).then((results) => {
    let canFitGuest =
      results.post_booked_guests + quest_count > results.post_max_guests
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
    let resultFromPostGuest;
    db.post_guests
      .create({
        post_id,
        uid,
        quest_count,
        paid,
      })
      .then((result) => {
        resultFromPostGuest = result;
      })
      .then(() => {
        db.posts.findByPk(post_id).then((postSelected) => {
          postSelected.post_booked_guests += quest_count;
          postSelected.save();
        });
      })
      .then(() => {
        JSON.stringify(resultFromPostGuest);
      })
      .catch((err) => {
        console.log(err);
        JSON.stringify("Error found: ", err);
      });
  };
}
