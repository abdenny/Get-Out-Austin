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
const date = new Date();
date.setDate(date.getDate() + 365);

// db.posts.create({
//   post_title: 'Golf Lessons',
//   post_description: "Learn from Austin's best.",
//   post_category: 'Lessons',
//   post_images:
//     'https://images.unsplash.com/photo-1543943475-e50600c4e81c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//   post_price: '45',
//   post_starting_date: new Date(),
//   post_ending_date: date.setDate(date.getDate() + 365),
//   post_max_guests: 1,
//   post_booked_guests: 0,
//   post_min_guests: 1,
//   post_complete: false,
//   uid: 'HS1xp1koKmZlr7V1lUiYFhtDy4u2',
// });

//////////ADDING Users

// db.users.create({
//   user_first_name: 'Ben',
//   user_last_name: 'Rest',
//   user_email_address: 'benrest@getoutaustin.com',
// });

// console.log('Now looking for user...');
// db.users
//   .findOne({
//     where: { user_first_name: 'Austin' },
//   })
//   .then((results) => {
//     console.log('Success');
//     console.log(results);
//   });

///// Deleting Posts

// db.posts.destroy({ where: { id: 18 } });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', api);
app.use('/dbwrite/v1', dbwrite);

// app.get('/posts', (req, res) => {
//   console.log('recieved post from client');
//   db.posts.findAll().then((results) => {
//     res.send(JSON.stringify(results));
//   });
// });
// app.post('/', (req, res) => {
//   return res.send('Received a POST HTTP method');
// });
// app.put('/', (req, res) => {
//   return res.send('Received a PUT HTTP method');
// });
// app.delete('/', (req, res) => {
//   return res.send('Received a DELETE HTTP method');
// });

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
  console.log(process.env.MY_SECRET);
});
