import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import db from '../models';
import bodyParser from 'body-parser';
import api from './api/api';
import dbwrite from './dbwrite/dbwrite';

const app = express();

app.use(cors());

//////////ADDING POSTS

// db.posts.findByPk(2).then((result) => {
//   result.uid = 'zm53pP4j2vX2pWs4pZNyAJFvx2o1';
//   result.Lon = '-97.7734';
//   result.Lat = '30.2769';
//   result.mapbox_description = '401 Deep Eddy Ave Austin, TX 78703';
//   result.image_avatar =
//     'https://lh5.googleusercontent.com/-Z1i2SU-4L50/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJN9oQBRJkzLoMpscNUSS-F5QeRnsw/photo.jpg';
//   result.save();
// });

///// Deleting Posts
// for (let index = 21; index < 25; index++) {
//   db.posts.destroy({ where: { id: index } });
// }

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', api);
app.use('/dbwrite/v1', dbwrite);

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
  console.log(process.env.MY_SECRET);
});
