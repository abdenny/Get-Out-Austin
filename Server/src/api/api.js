import express from 'express';
import userRouter from './routes/userRouter';
import postsRouter from './routes/postsRouter';
import postGuestRouter from './routes/postGuestRouter';

const api = express();
// You may add api specific middlewares here
// TODO: move all controllers in the src/api/controllers folder
api.use('/users', userRouter);
api.use('/posts', postsRouter);
api.use('/posts/guests', postGuestRouter);

api.get('/', (req, res) => {
  res.send({
    message: 'Hello from the API',
  });
});

export default api;
