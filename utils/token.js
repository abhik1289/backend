import jwt from "jsonwebtoken";


export const signInToken = (email, duration) => {
    return jwt.sign(
        { email },
        process.env.SIGNIN_SECRET_KEY,
        { expiresIn: duration || "24h" } 
    );
}