import { Router } from "express";
import { addPostGuest } from "../controllers/addPostGuest";

const postGuestRouter = Router();

postGuestRouter.post("/", addPostGuest);

export default postGuestRouter;
