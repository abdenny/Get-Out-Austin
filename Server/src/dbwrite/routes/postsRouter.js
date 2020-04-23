import { Router } from "express";
import { addPosts } from "../controllers/addPosts";

const postsRouter = Router();

postsRouter.post("/", addPosts);

export default postsRouter;
