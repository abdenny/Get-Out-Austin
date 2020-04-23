import db from '../../../models';

export function getPosts(req, res) {
  db.posts.findAll().then((results) => {
    res.send(JSON.stringify(results));
  });
}
