import express from "express";
import userRouter from "./routes/userRouter";
import postsRouter from "./routes/postsRouter";
import postGuestRouter from "./routes/postGuestRouter";

const dbwrite = express();
// You may add dbwrite specific middlewares here
// Check for login data here.
dbwrite.use("/users", userRouter);
dbwrite.use("/posts", postsRouter);
dbwrite.use("/posts/guests", postGuestRouter);

dbwrite.get("/", (req, res) => {
  res.send({
    message: "Hello from the DbWriter",
  });
});

export default dbwrite;
