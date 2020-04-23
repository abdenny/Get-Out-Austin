import { Router } from "express";
import { addUsers } from "../controllers/addUsers";

const userRouter = Router();

userRouter.post("/", addUsers);

export default userRouter;
