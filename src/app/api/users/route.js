import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import bcrypt from "bcryptjs"
connectDb();
export async function GET() {
    let users = [];
    users = await User.find().select("-password")
    return NextResponse.json(users)
}
// create user object with user panel 
export async function POST(req) {
    // fetch user deatiles from req 
    const { name, email, password, about, profileUrl } = await req.json()
    // craete user object with user model 
    const user = new User({
        name,
        email,
        password,
        about,
        profileUrl
    });
    try {
        // save the obj to database
        user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT))
        console.log(user)
        const createdUser = await user.save();
        const response = NextResponse.json(user, {
            status: 201,
            success: true
        });
        return response
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "fail",
            success: false
        })

    }


    // const body = req.body;
    // console.log(body);
    // console.log(req.method);
    // console.log(req.cookies);
    // console.log(req.headers);
    // console.log(req.nextUrl.pathname);
    // console.log(req.nextUrl.searchParams);
    // console.log(await req.json());
    // console.log(await req.text());
    // return NextResponse.json({
    //     message: "post"
    // })
}

