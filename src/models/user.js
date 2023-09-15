import mongoose from "mongoose";
import { Schema } from "mongoose";
const UserSchema = new Schema({
    name: String,
    email: {
        unique: true,
        type: String,
        required: [true, "email is required!!"],
    },
    password: {
        type: String,
    },
    about: String,
    profileUrl: String
})
export const User = mongoose.models.users || mongoose.model("users", UserSchema);
