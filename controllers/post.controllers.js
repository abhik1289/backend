import postModel from "../models/post.models.js";

import { StatusCodes } from "http-status-codes";




export const addPost = async (req, res) => {
    try {
        const {
            title,
            author,
            content,
            category,
            image_url
        } = req.body;

        await postModel.create({
            title,
            author,
            content,
            category,
            image_url
        })
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Post created successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: "Internal server error" })
    }
}

export const getPosts = async (req, res) => {
    try {

        const posts = await postModel.find();
        // console.log(posts)
        res.status(StatusCodes.OK).json({ success: true, posts });
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: "Internal server error" })
    }
}

