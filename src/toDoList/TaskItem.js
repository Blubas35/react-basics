import React from 'react'

const TaskItem = ({ data, onDeleteTask, onTaskDone }) => {
    return (
        <div className='result-wrapper'>
            <ul>
                {data.map((task) =>
                    <li
                        key={task.id}>
                        <div className={task.done ? 'task-done task-low' : ''}>
                            <input onClick={() => onTaskDone(task.id)} type='checkbox'></input>
                            <span>{task.title}</span>
                            <p>Task description: {task.description}</p>
                            <p>Task deadline: {task.deadline}</p>
                        </div>

                        <button style={{ width: '20%' }} className='delete-button' onClick={() => onDeleteTask(task.id)}>Delete</button>
                    </li>)}
            </ul>
        </div>)
}

export default TaskItem