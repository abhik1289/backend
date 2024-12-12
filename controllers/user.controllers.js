import userModel from "../models/user.models.js";
import { findByEmail } from "../utils/userHelper.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";
import { signInToken } from "../utils/token.js";


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await findByEmail(email);

        if (!existingUser) {
            res.status(StatusCodes.BAD_REQUEST).json({
                error: true,
                message: "invalid email or password"
            })
        } else {
            const hashPWD = existingUser.password;
            const isValid = await bcrypt.compare(password, hashPWD);
            const token = signInToken(email, "24h");
            if (isValid) {
                res.status(StatusCodes.OK).json({
                    success: true,
                    token,
                    fullName: existingUser.fullName,
                    email: existingUser.email
                })
            }
        }

    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: "Internal server error" })
    }
}

export const addUser = async (req, res) => {

    try {

        const { fullName, email, password } = req.body;

        // 1) check if the user email is existing
        const existingUser = await findByEmail(email);
        if (existingUser) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
                {
                    error: true,
                    message: "this email already exists"
                }
            )
        } else {
            // 2) check if not existing create user
            const hashPWD = await bcrypt.hash(password, 10);
            await userModel.create({ fullName, email, password: hashPWD });
            res.status(StatusCodes.CREATED).json({
                success: true,
                message: "User created successfully"
            })
        }

    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: "Internal server error" })
    }

}


