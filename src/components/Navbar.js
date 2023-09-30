"use client"
import UserContext from '@/context/userContext'
import { logOutUser } from '@/services/userServices'
import { ThreeCircles } from 'react-loader-spinner'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
function Navbar() {
    const context = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const doLogout = async () => {
        try {
            const result = await logOutUser()
            // console.log(result);
            context.setUser(undefined)
            router.push("/")
        } catch (error) {
            console.log(error);
            toast.error("error in logout")
        }
    }
    // console.log(context);
    return (
        <div className='bg-blue-600 sticky top-0 flex justify-between px-36 text-yellow items-center  h-16'>
            <div>
                <h1 className='text-2xl font-semibold'>
                    <a href="/">Work Manger</a>
                </h1>
            </div>
            <div>
                <ul className='flex space-x-5'>
                    {
                        context.user && (
                            <>
                                <li>
                                    <Link href={"/"} className="hover:text-blue-200">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/add-task" className="hover:text-blue-200">
                                        Add Task
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/show-task"} className="hover:text-blue-200">
                                        Show Tasks
                                    </Link>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
            <div >
                <ul className='flex space-x-3'>
                    {
                        context.user && (
                            <>
                                <li className="hover:text-blue-200"><Link href="#!">{context.user.name}</Link></li>
                                <li className="hover:text-blue-200" ><button onClick={doLogout}>LogOut</button></li>
                            </>
                        )
                    }
                    {!context.user && (
                        <>
                            <li className="hover:text-blue-200"><Link href="/login">LogIn</Link></li>
                            <li className="hover:text-blue-200"><Link href="/signup">SignUp</Link></li>
                        </>
                    )
                    }
                </ul>
            </div>
        </div>
    )
}
export default Navbar