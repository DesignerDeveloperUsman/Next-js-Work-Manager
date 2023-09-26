import React from 'react'

function Task({ task }) {
    return (
        <div>
            <div>
                <h1 className='bg-gray-200'>
                    {task.title}
                </h1>
            </div>
        </div>)

}

export default Task;