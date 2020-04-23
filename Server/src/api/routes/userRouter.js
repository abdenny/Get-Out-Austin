import { Router } from 'express';
import { getUsers } from '../controllers/getUsers';

const userRouter = Router();

userRouter.get('/', getUsers);

export default userRouter;
