"use client"
import React, { useState } from "react";
import { toast } from 'react-toastify';
import login from "../../assets/login.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import Task from "../show-task/Task";

function AddTask() {
    // document.title = metadata.title;
    const [task, setTask] = useState({
        title: "",
        content: "",
        status: "none",
        userId: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(task);
        try {
            const result = await addTask(task)
            console.log(result);
            toast.success("Successfully", {
                position: "top-center"
            })
            setTask({
                title: "",
                content: "",
                status: "none",
            })
        }
        catch (error) {
            console.log(error);
            toast.error("not add", {
                position: "top-center"
            })
        }
    }
    return (
        <div className="grid grid-cols-12 mt-2 justify-center">
            <div className="p-5 col-span-4 col-start-5 shadow-sm">
                <div className="flex justify-center my-4">
                    <Image alt="login photo" src={login} style={{ width: "50%" }} />
                </div>
                <h1 className="text-center mb-2">Add your Task</h1>
                <form action="" onSubmit={handleSubmit}>
                    {/* task title  */}
                    <div >
                        <label htmlFor="task_title" className="block text-sm font-medium mb-2 ">Title</label>
                        <input
                            name="task_title" onChange={(e) => {
                                setTask({
                                    ...task,
                                    title: e.target.value,
                                })
                            }}
                            value={task.title}
                            type="text" className="w-full p-2.5 rounded-lg bg-gray-800 border-gray-800" id="task_title" />
                    </div>
                    {/* task content  */}
                    <div className="mt-4">
                        <label htmlFor="task_title" className="block text-sm font-medium mb-2 ">Content</label>
                        <textarea
                            name="task_content" onChange={(e) => {
                                setTask({
                                    ...task,
                                    content: e.target.value,
                                })
                            }}
                            value={task.content}
                            type="text" className="w-full p-2.5 rounded-lg	 bg-gray-800 border-gray-800" id="task_content" rows={5} />
                    </div>
                    {/* TASK STATUS  */}
                    <div className="mt-4">
                        <label htmlFor="task_status" className="block">Status</label>
                        <select
                            name="task_status"
                            onChange={(e) => {
                                setTask({
                                    ...task,
                                    status: e.target.value,
                                })
                            }}
                            value={task.status}
                            id="task_status" className="w-full p-2.5 rounded-lg	 bg-gray-800 border-gray-800">
                            <option value="none" disabled>---Select Status---</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    {/* BUTTON  */}
                    <div className="mt-4 flex justify-center">
                        <button className="bg-blue-600 rounded-lg py-3 px-2 hover:bg-blue-400 btn-own">Add Task</button>
                        <button className="bg-red-600 ms-4 py-2 px-4 rounded-lg hover:bg-red-400 btn-own">Clear</button>
                    </div>
                    {/* {
                        JSON.stringify(task)
                    } */}
                </form>
            </div>
        </div>
    );
}

export default AddTask;

