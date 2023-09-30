"use client"
import { ThreeCircles } from "react-loader-spinner";

export default function loading() {
    return (
        <div className='flex justify-center items-center'><ThreeCircles height={40} color='green' />
        </div>
    )
}