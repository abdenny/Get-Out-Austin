import db from '../../../models';

export function getUsers(req, res) {
  //   res.send({
  //     users: [
  //       { id: 1, name: 'How to train your dragon' },
  //       { id: 2, name: 'Queen of Katwe' },
  //     ],
  db.users.findAll().then((results) => {
    res.send(JSON.stringify(results));
  });
}
