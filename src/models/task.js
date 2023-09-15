import mongoose, { Mongoose, Schema } from "mongoose";
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    addedDate: {
        type: String,
        required: true,
        default: Date.now(),
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "completed", "starting"],
        default: "pending"
    },
    userId: {
        type: mongoose.ObjectId,
        required: true
    }
});
export const Task = mongoose.models.task || mongoose.model("task", TaskSchema);