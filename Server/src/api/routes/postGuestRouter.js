import { Router } from 'express';
import { getPostGuests } from '../controllers/getPostGuest';

const postGuestRouter = Router();

postGuestRouter.get('/', getPostGuests);

export default postGuestRouter;
