import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import db from '../models';

const app = express();

app.use(cors());

console.log('Now looking for user...');
// db.users
//   .findOne({
//     where: { user_first_name: 'Austin' },
//   })
//   .then((results) => {
//     console.log('Success');
//     console.log(results);
//   });

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});
app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});
app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
  console.log(process.env.MY_SECRET);
});
