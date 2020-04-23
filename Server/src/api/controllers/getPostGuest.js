import db from '../../../models';

export function getPostGuests(req, res) {
  db.post_guests.findAll().then((results) => {
    res.send(JSON.stringify(results));
  });
}
