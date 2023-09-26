"use client"
import Task from '@/components/Task'
import UserContext from '@/context/userContext'
import { getUserTask } from '@/services/taskService'
import React, { useContext, useEffect, useState } from 'react'

function ShowTaskPage() {
    const [tasks, setTasks] = useState([])
    const context = useContext(UserContext)
    async function loadTasks(userId) {
        try {
            const tasks = await getUserTask(userId)
            setTasks([...tasks])
            console.log(tasks);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (context.user) {
            loadTasks(context.user._id)
        }
    }, [context.user])
    return (
        <div className='grid mt-3'>
            <div className=''>
                <h1 className='text-3xl'>Your Tasks ({tasks.length})</h1>
                {
                    tasks.map((task) => {
                        <Task task={task} key={task._id} />
                    })
                }
            </div>
        </div>
    )
}

export default ShowTaskPage