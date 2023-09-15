import { NextResponse } from "next/server";
export function GET(request, { params }) {
    const { userId, postsId } = params;
    console.log("userId is ", userId);
    console.log("postId is ", postsId);
    return NextResponse.json(params)
}