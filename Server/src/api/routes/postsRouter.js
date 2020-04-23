import { Router } from 'express';
import { getPosts } from '../controllers/getPosts';

const postsRouter = Router();

postsRouter.get('/', getPosts);

export default postsRouter;
