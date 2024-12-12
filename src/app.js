import express from 'express';
import UserRouter from '../routes/user.route.js';
import postRouter from '../routes/post.route.js';



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes

app.use("/api/user", UserRouter);
app.use("/api/post", postRouter);





export default app;

