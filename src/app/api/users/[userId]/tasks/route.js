import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// localhost:3000/api/users/[userId]/tasks 
export async function GET(req, { params }) {
    const { userId } = params;
    try {
        const tasks = await Task.find({
            userId: userId,
        });
        return NextResponse.json(tasks)
    } catch (error) {
        console.log(error);
        NextResponse.json({
            "message": "no user",
            "find": false
        })
    }
}