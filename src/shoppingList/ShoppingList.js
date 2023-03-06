import Container from "../components/container/container"
import { useState } from "react"
import './shoppingList.css'
import ShoppingItem from "./shopping-item/shopping-item"
import GenerateForm from "./shopping-item/form"

export default function GetShoppingList() {

    const [input, setInput] = useState('')
    const [shoppingList, setShoppingList] = useState([])

    const submitHandler = (event) => {
        event.preventDefault()

        const newShoppingItem = {
            id: Math.random(),
            title: input,
            done: false,
        }

        setShoppingList((prevState => [...prevState, newShoppingItem]))
        setInput('')
    }

    const inputHandler = (event) => setInput(event.target.value)

    const deleteHandler = (id) => {
        setShoppingList(prevState => prevState.filter(item => item.id !== id))
    }

    const doneHandler = (id) => {

        setShoppingList(prevState => {
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
            item={input}
            onItemChange={inputHandler}
            ></GenerateForm>

            <div className="shopping-list-wrapper">
                {shoppingList && shoppingList.length > 0 ? (
                    <>
                        <h2> yra..</h2>
                        <ul>
                            {shoppingList.map((item) =>
                                <ShoppingItem
                                    key={item.id}
                                    data={item}
                                    onTaskDone={doneHandler}
                                    onDelete={deleteHandler}
                                ></ShoppingItem>)}
                        </ul>
                    </>
            ) : (
            <h2> No shopping items...</h2>
                )}
        </div>
        </Container >
    )
}
