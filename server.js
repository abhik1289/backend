//dotenv setup
import dotenv from "dotenv";
dotenv.config();
//app module setup
import app from "./src/app.js";
//port
const PORT = process.env.PORT;
import "./database/db.js";




app.listen(PORT, () => {
    console.log("The server is listening", PORT);
})
