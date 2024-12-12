
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
import "./database/db.js";

// console.log(process.env.DB_URL)


app.listen(PORT, () => {
    console.log("The server is listening", PORT);
})
