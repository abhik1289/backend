import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    fullName: {
        required: true,
        type: String,
        trim: true,
    },
    email: {
        required: true,
        unique: true,
        trim: true,
        type: String
    },
    password: {
        required: true,
        type: String,

    }
}, {
    timestamps: true,
});


const userModel = mongoose.model('User', userSchema);


export default userModel;