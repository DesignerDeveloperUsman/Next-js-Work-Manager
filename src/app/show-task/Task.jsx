import UserContext from '@/context/userContext';
import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx"

const Task = ({ task, deleteTaskParent }) => {
    const { user } = useContext(UserContext)
    function deleteTask(taskId) {
        deleteTaskParent(taskId)
    }
    return (
        <div className={`shadow-lg mt-2 rounded-md ${task.status === "completed" ? "bg-green-800" : "bg-gray-800"}`}>
            <div className="p-5">
                <div className="flex justify-between">
                    <h1 className="text-2xl">{task.title}</h1>
                    <span onClick={() => { deleteTask(task._id) }} className="shadow-lg hover:bg-red-500 hover:w-6  bg-gray-950 rounded-full w-5 h-5 flex justify-center items-center cursor-pointer " >
                        <RxCross2 />
                    </span>
                </div>
                <h1 className="font-semibold">{task.content}</h1>
                <h1 className="font-semibold">{task.addedDate}</h1>
                <div className="flex justify-between">
                    <p className="text-right">Status: <span className="fw-bold"> {task.status}</span></p>
                    <p className="text-right">Author: <span className="fw-bold"> {user?.name}</span></p>
                </div>
            </div>
        </div>
    )

}

export default Task;