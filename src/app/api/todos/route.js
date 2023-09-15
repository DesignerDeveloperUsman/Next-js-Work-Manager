import { NextResponse } from "next/server";

export function DELETE(request) {
    return NextResponse.json({
        message: "todo"
    })
}