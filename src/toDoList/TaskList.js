import React from 'react'

const TaskList = ({ data, onDeleteTask, onTaskDone }) => {
    return (
        <li
            key={data.id}>
            <div className={data.done ? 'task-done task-low' : ''}>
                <input onClick={() => onTaskDone(data.id)} type='checkbox'></input>
                <span>{data.title}</span>
                <p>Task description: {data.description}</p>
                <p>Task deadline: {data.deadline}</p>
            </div>

            <button style={{ width: '20%' }} className='delete-button' onClick={() => onDeleteTask(data.id)}>Delete</button>
        </li>)
}

export default TaskList