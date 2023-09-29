import { NextResponse } from "next/server"
import { connectDb } from "@/helper/db";


export async function POST(request) {
    await connectDb()
    const response = NextResponse.json({
        message: 'user logout!!',
        success: true
    })
    response.cookies.set("authToken", "", {
        expiresIn: new Date(0)
    })
    return response;
}