import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
export async function POST(request) {
    const { title, content, userId, status } = await request.json();
    // fetching logged in user id 
    const authToken = request.cookies.get("authToken")?.value
    const data = jwt.verify(authToken, process.env.JWT_KEY)
    console.log(data._id);
    const task = new Task({
        title,
        content,
        userId: data._id,
        status
    });
    try {
        const createdTask = await task.save();
        return NextResponse.json(createdTask, {
            status: 201,
            success: true
        })
    } catch (error) {
        console.log(error);
        NextResponse.json({
            success: false
        })
    }
}
export async function GET() {
    let task = [];
    task = await Task.find();
    return NextResponse.json(task);
}
export async function PUT() { }