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
});


const user = mongoose.model('User', userSchema);


export default user;