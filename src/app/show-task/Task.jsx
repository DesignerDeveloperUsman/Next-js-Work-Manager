import UserContext from '@/context/userContext';
import React, { useContext } from 'react'

const Task = ({ task }) => {
    const { user } = useContext(UserContext)
    return (
        <div className={`shadow-lg mt-2 rounded-md ${task.status === "completed" ? "bg-green-800" : "bg-gray-800"}`}>
            <div className="p-5">
                <h1 className="text-2xl">{task.title}</h1>
                <h1 className="font-semibold">{task.content}</h1>
                <div className="flex justify-between">
                    <p className="text-right">Status: <span className="fw-bold"> {task.status}</span></p>
                    <p className="text-right">Author: <span className="fw-bold"> {user?.name}</span></p>
                </div>
            </div>
        </div>
    )

}

export default Task;