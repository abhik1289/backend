import mongoose from "mongoose";


const advertisementSchema = mongoose.Schema({
    shopName: {
        required: true,
        type: String,
        trim: true,
    },
    address: {
        required: true,
        trim: true,
        type: String
    },
    googleLink: {
        required: true,
        type: String,
        trim: true,
    },
    description: {
        required: true,
        type: String,
        trim: true,
    },
    image_url: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});


const advertisementModel = mongoose.model('advertisement', advertisementSchema);


export default advertisementModel;