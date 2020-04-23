import "dotenv/config";
import cors from "cors";
import express from "express";
import db from "../models";
import bodyParser from "body-parser";
import api from "./api/api";
import dbwrite from "./dbwrite/dbwrite";

const app = express();

app.use(cors());

// console.log('Now looking for user...');
// db.users
//   .findOne({
//     where: { user_first_name: 'Austin' },
//   })
//   .then((results) => {
//     console.log('Success');
//     console.log(results);
//   });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1", api);
app.use("/dbwrite/v1", dbwrite);

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
