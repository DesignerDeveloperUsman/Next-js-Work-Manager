import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";

export async function GET(request) {
    const authToken = request.cookies.get("authToken")?.value
    // console.log(authToken);
    const data = jwt.verify(authToken, process.env.JWT_KEY)
    // data sy hmy user id mil jay gi 
    console.log(data);
    // phr hum user id sy user ki sari detail lyly gy aur password show nhi krway gy
    const user = await User.findById(data._id).select("-password")
    return NextResponse.json(user)
} 