import userModel from "../models/user.models.js";

export const findByEmail = async (email) => {
    try {
        return await userModel.findOne({ email }) || null;
    } catch (error) {
        console.error("Error finding user by email:", error);
        throw new Error("Failed to find user");
    }
};
