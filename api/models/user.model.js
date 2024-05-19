import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,

    },
    password: {
        type: String,

    }
}, { timestamps: true })

export const userModel = mongoose.model("user", UserSchema);