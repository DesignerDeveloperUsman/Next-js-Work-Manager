import { User } from "@/models/user";
import { NextResponse } from "next/server";
// user delete 
export async function DELETE(request, { params }) {
    const { userId } = params;
    try {
        await User.deleteOne({
            _id: userId,
        });
        return NextResponse.json({
            message: "deletd",
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "delete fail"
        })
    }
}
// get elelment by id 
export async function GET(request, { params }) {
    const { userId } = params;
    try {
        const user = await User.findById(userId);
        return NextResponse.json(user)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "find fail",
        })
    }
}
// update user 
export async function PUT(request, { params }) {
    const { userId } = params;
    const { name, password, about } = await request.json();
    try {
        const user = await User.findById(userId);
        user.name = name;
        user.password = password;
        user.about = about;
        const upadetUser = await user.save();
        return NextResponse.json(upadetUser);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "find fail",
        })
    }
}