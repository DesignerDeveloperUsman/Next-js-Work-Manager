"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import signUp from "../../assets/signup.svg";
import Image from 'next/image';
import { toast } from 'react-toastify';
import { serviceSignUp } from '@/services/userServices';
function SignUp() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
        profileUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    });
    const clean = () => {
        setData({
            name: "",
            email: "",
            password: "",
            about: "",
            profileUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        })
    }
    const doSignUp = async (e) => {
        e.preventDefault();
        console.log(e);
        if (data.name.trim() === "" || data.name == null) {
            toast.warning("Name is require", {
                position: 'top-center'
            })
            return;
        }
        try {
            const result = await serviceSignUp(data);
            // console.log(result);
            toast.success("user success", {
                position: 'top-center'
            });
            setData({
                name: "",
                email: "",
                password: "",
                about: "",
                profileUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            })
        } catch (error) {
            toast.error("user fail", {
                position: 'top-center'
            })
        }
    };

    return (
        <div className='grid grid-cols-12 mt-1 justify-center'>
            <div className='p-5 col-span-4 col-start-5 shadow-sm'>
                <div className="flex justify-center my-4">
                    <Image alt="login photo" src={signUp} style={{ width: "50%" }} />
                </div>
                <h1 className="text-center mb-2">Sign Up Here </h1>
                <form action="" className='mt-5' onSubmit={doSignUp}>
                    {/* name  */}
                    <div>
                        <label htmlFor="user_name" className="block text-sm font-medium mb-2 ">Name</label>
                        <input
                            name="user_name"
                            onChange={
                                (e) => {
                                    setData({
                                        ...data,
                                        name: e.target.value
                                    })
                                }
                            }
                            value={data.name}
                            placeholder='Enter Your Name'
                            type="text" className="w-full p-2.5 rounded-lg bg-gray-800 border-gray-800" id="user_name" />
                    </div>
                    {/* email  */}
                    <div className='mt-4' >
                        <label htmlFor="user_email" className="block text-sm font-medium mb-2 ">Email</label>
                        <input
                            name="user_email"
                            onChange={
                                (e) => {
                                    setData({
                                        ...data,
                                        email: e.target.value
                                    })
                                }
                            }
                            value={data.email}
                            placeholder='Enter Your Email'
                            type="email" className="w-full p-2.5 rounded-lg bg-gray-800 border-gray-800" id="user_email" />
                    </div>
                    {/* password  */}
                    <div className='mt-4' >
                        <label htmlFor="user_password" className="block text-sm font-medium mb-2 ">Password</label>
                        <input
                            name="user_password"
                            onChange={
                                (e) => {
                                    setData({
                                        ...data,
                                        password: e.target.value
                                    })
                                }
                            }
                            value={data.password}
                            placeholder='Enter Your Password'
                            type="password" className="w-full p-2.5 rounded-lg bg-gray-800 border-gray-800" id="user_password" />
                    </div>
                    {/* about  */}
                    <div className='mt-4' >
                        <label htmlFor="user_about" className="block text-sm font-medium mb-2 ">About You</label>
                        <textarea
                            name="user_about"
                            onChange={
                                (e) => {
                                    setData({
                                        ...data,
                                        about: e.target.value
                                    })
                                }
                            }
                            value={data.about}
                            placeholder='Enter About Yourself  '
                            type="text"
                            rows={4} className="w-full p-2.5 rounded-lg bg-gray-800 border-gray-800" id="user_about" ></textarea>
                    </div>
                    {/* button  */}
                    <div className="mt-4 flex justify-center">
                        <button
                            type='submit'
                            className="bg-green-600 rounded-lg py-2 px-8 hover:bg-green-400">Sign Up</button>
                        <button type='button' onClick={clean} className="bg-red-600 ms-4 py-2 px-8 rounded-lg hover:bg-red-400">Clear</button>
                    </div>
                    <div className="mt-4 text-sm flex justify-center">
                        <p className="mr-3 text-sm">Have an account ? </p>
                        <div className="text-blue-600 hover:text-blue-200"><Link href="login" >Log In</Link></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp