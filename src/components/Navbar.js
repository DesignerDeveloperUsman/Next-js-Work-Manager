"use client"
import Link from 'next/link'
import React from 'react'
function Navbar() {
    return (
        <div className='bg-blue-600 flex justify-between px-36 text-yellow items-center h-16'>
            <div>
                <h1 className='text-2xl font-semibold'>
                    <a href="/">Work Manger</a>
                </h1>
            </div>
            <div>
                <ul className='flex space-x-5'>
                    <li>
                        <Link href={"/"} className='hover:text-blue-red-200'>Home</Link>
                    </li>
                    <li>
                        <Link href="/add-task">Add Task</Link>
                    </li>
                    <li>
                        <Link href="/show-task">Show Task</Link>
                    </li>
                </ul>
            </div>
            <div >
                <ul className='flex space-x-3'>
                    <li>LogIn</li>
                    <li>SignUp</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar