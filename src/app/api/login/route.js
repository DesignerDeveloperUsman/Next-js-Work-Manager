import { NextResponse } from "next/server";
import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export async function POST(req) {
    const { email, password } = await req.json();
    try {
        // 1. find user by email 
        const user = await User.findOne({
            email: email,
        })
        if (user == null) {
            throw new Error("This email not exist")
        }
        // 2. compare password by user and in User  
        const compare = bcrypt.compareSync(password, user.password);
        if (!compare) {
            throw new Error("Password Not Match")
        }
        // 3. Genrate Token 
        const token = jwt.sign({
            _id: user._id,
            name: user.name
        }, process.env.JWT_KEY)
        return NextResponse.json({
            message: true
        })
        console.log(token);
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false
        })
    }
}