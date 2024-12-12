import express from 'express';
import UserRouter from '../routes/user.route.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes

app.use("/api/user", UserRouter);




export default app;

