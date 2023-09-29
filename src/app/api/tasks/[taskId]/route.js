import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";

export async function GET(request, { params }) {
    const { taskId } = params;
    try {
        await connectDb()
        const task = await Task.findById(taskId);
        return NextResponse.json(task)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "find fail",
        })
    }
}
export async function PUT(req, { params }) {
    const { taskId } = params;
    const { title, content, status } = await req.json();
    try {
        const task = await Task.findById(taskId);
        task.title = title;
        task.content = content;
        task.status = status;
        const upadetTask = await task.save();
        return NextResponse.json(upadetTask);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "find fail",
        })
    }
}
export async function DELETE(request, { params }) {
    const { taskId } = params;
    try {
        await Task.deleteOne({
            _id: taskId
        });
        return NextResponse.json({
            "message": "deleted",
            "success": true
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "DElete fail",
        })
    }
}