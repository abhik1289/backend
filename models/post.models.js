import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
        trim: true,
    },
    author: {
        required: true,
        trim: true,
        type: String
    },
    content: {
        required: true,
        type: String,
        trim: true,
    },
    category: {
        required: true,
        type: String,
        trim: true,
        enum: ["article", "poetry", "stories"]
    },
    image_url: {
        type: String,
    }
}, {
    timestamps: true,
});


const postModel = mongoose.model('post', postSchema);


export default postModel;