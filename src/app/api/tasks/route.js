import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, content, userId } = await req.json();
    const task = Task({
        title,
        content,
        userId
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