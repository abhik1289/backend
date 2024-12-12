import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbURI = process.env.DB_URL;


mongoose.connect(dbURI).then(() => {
    console.log("Database connection established")
}).catch((err) => {
    console.log(err)
    console.log("Database connection failed");
    process.exit(1);
})