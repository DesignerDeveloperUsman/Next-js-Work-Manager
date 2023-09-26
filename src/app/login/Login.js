"use client"
import { logInService } from "@/services/logInService";
import signUp from "../../assets/signup.svg";
import Image from 'next/image';
import Link from "next/link";
import React, { useContext, useState } from 'react'
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";
import { connectDb } from "@/helper/db";
function LoginForm() {
    connectDb()
    const context = useContext(UserContext)
    const router = useRouter()
    const [loginData, setloginData] = useState({
        password: "",
        email: ""
    })
    const clean = () => {
        setloginData({
            password: "",
            email: ""
        })
    }
    const loginSubmit = async (e) => {
        e.preventDefault();
        if (loginData.password.trim() === "") {
            toast.warn("Password is essintial", {
                position: "top-center"
            })
            return
        }
        if (loginData.password.length < 5) {
            toast.error("password contain more than 5 words", {
                position: "top-center"
            })
            return
        }
        try {
            const result = await logInService(loginData)
            console.log(result);
            toast.success("logged in")
            context.setUser(result.user)
            router.push("/profile")
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, {
                position: "top-center"
            })
        }
    }
    return (
        <div className='grid grid-cols-12 mt-1 justify-center'>
            <div className='p-5 col-span-4 col-start-5 shadow-sm'>
                <div className="flex justify-center my-4">
                    <Image alt="login photo" src={signUp} style={{ width: "50%" }} />
                </div>
                <h1 className="text-center mb-2">Log In Here </h1>
                <form action="" className='mt-5' onSubmit={loginSubmit}>
                    {/* email  */}
                    <div className='mt-4' >
                        <label htmlFor="user_email" className="block text-sm font-medium mb-2 ">Email</label>
                        <input
                            name="user_email"
                            onChange={
                                (e) =>
                                    setloginData({
                                        ...loginData,
                                        email: e.target.value
                                    })
                            }
                            value={loginData.email}
                            placeholder='Enter Your Email'
                            type="email" className="w-full p-2.5 rounded-lg bg-gray-800 border-gray-800" id="user_email" />
                    </div>
                    {/* password  */}
                    <div className='mt-4' >
                        <label htmlFor="user_password" className="block text-sm font-medium mb-2 ">Password</label>
                        <input
                            name="user_password"
                            onChange={
                                (e) =>
                                    setloginData({
                                        ...loginData,
                                        password: e.target.value
                                    })
                            }
                            value={loginData.password}
                            placeholder='Enter Your Password'
                            type="password" className="w-full p-2.5 rounded-lg bg-gray-800 border-gray-800" id="user_password" />
                    </div>
                    {/* button  */}
                    <div className="mt-4 flex justify-center">
                        <button
                            type='submit'
                            className="bg-green-600 rounded-lg py-2 px-8 hover:bg-green-400">Log In</button>
                        <button type='button'
                            onClick={clean}
                            className="bg-red-600 ms-4 py-2 px-8 rounded-lg hover:bg-red-400">Clear</button>
                    </div>
                    {/* already sign in  */}
                    <div className="mt-4 text-sm flex justify-center">
                        <p className="mr-3 text-sm">Don't have account ? </p>
                        <div className="text-blue-600 hover:text-blue-200"><Link href="signup" >Sign Up</Link></div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginForm