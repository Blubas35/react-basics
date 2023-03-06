
import { useState } from 'react'
import Container from '../components/container/container'
import GenerateForm from './components/form'
import TaskItem from './TaskItem'
import './to-do-list.css'

const ToDoList = () => {

    const options = ['low', 'medium', 'high']

    const [input, setInput] = useState('')
    const [toDoList, setToDoList] = useState([])
    const [descriptionInput, setDescriptionInput] = useState('')

    const optionElement = options.map((option, index) => {
        return <option key={index}>{option}</option>
    })

    const descriptionInputHandler = (event) => setDescriptionInput(event.target.value)

    const submitHandler = (event) => {
        event.preventDefault()
        const newTask = {
            id: Math.random(),
            title: input,
            done: false,
            // priority: event.target.select.value,
            description: descriptionInput,
            deadline: event.target.deadline.value,
        }
        setToDoList((prevState => [...prevState, newTask]))
        setInput('')
        setDescriptionInput('')
    }

    const inputHandler = (event) => {
        setInput(event.target.value)
    }

    const deleteHandler = (id) => {
        setToDoList(prevState => prevState.filter(item => item.id !== id))
    }

    const doneHandler = (id) => {

        setToDoList(prevState => {

            const updatedList = prevState.map(item => {
                if (item.id === id) {
                    const itemToUpdate = { ...item, done: !item.done }
                    return itemToUpdate
                }
                return item
            })
            return updatedList
        })
    }

    return (
        <Container>
            <GenerateForm
                onFormSubmit={submitHandler}
                onTaskChange={inputHandler}
                onDescriptionChange={descriptionInputHandler}
                taskValue={input}
                descriptionValue={descriptionInput}
            ></GenerateForm>


            <TaskItem
                data={toDoList}
                onDeleteTask={deleteHandler}
                onTaskDone={doneHandler}
            ></TaskItem>
        </Container>
    )
}

export default ToDoList