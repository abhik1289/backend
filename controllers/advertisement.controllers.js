import advertisementModel from "../models/advertisement.models.js";

import { StatusCodes } from "http-status-codes";




export const addAdvertisement = async (req, res) => {
    try {


        const { shopName,
            address,
            googleLink,
            description,
            image_url } = req.body;

        await advertisementModel.create({
            shopName,
            address,
            googleLink,
            description,
            image_url
        });

        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Advertisement  created successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export const getAdvertisement = async (req, res) => {
    try {

        const posts = await advertisementModel.find();
        // console.log(posts)
        res.status(StatusCodes.OK).json({ success: true, posts });
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: "Internal server error" })
    }
}


export const deleteAdvertisement = async (req, res) => {
    try {


        const id = req.params.id;


        await advertisementModel.findByIdAndDelete(id);
        res.status(StatusCodes.OK).json({ success: true, message: "successfully deleted" });

    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: "Internal server error" })
    }
}
