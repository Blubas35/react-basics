// import { useState } from "react"


// export default function ShoppingItem(props) {
//     console.log(props)
//     let { title, done, id } = props.item

//     const [areChecked, setAreChecked] = useState(done)

//     const isChecked = (event) => {
//         if(event.target.checked) {
//             setAreChecked(true)
//         } else {
//             setAreChecked(false)
//         }
//     }
//     let classes = ''

//     if (areChecked === true) {
//         classes = 'checked'
//     } else {
//         classes = ''
//     }

//     // const deleteElement = (event) => {
//     //     event.preventDefault()
//     //     console.log(event)
//     //     const elements = event.filter(element => {
//     //         console.log(element)
//     //     })
//     // }

//     return (
//         <li>

//         </li>
//         // <div className="control-form">
//         //     <label className={classes} htmlFor={id} >{title}</label>
//         //     <input onChange={isChecked} name='item' id={id} type='checkbox'></input>
//         //     {/* <button className="delete-button" onClick={deleteElement}>Delete</button> */}
//         // </div>
//     )
// }


// export default function ShoppingList() {

//     const itemsList = [
//     ]

//     const [shoppingList, setShoppingList] = useState(itemsList)
//     const [newItem, setNewItem] = useState('')

//     const textInputHandler = (event) => {
//         setNewItem(event.target.value)

//     }

//     const addItem = (event) => {
//         event.preventDefault()
//         console.log(newItem)

//         const newShoppingItem = {
//             id: Math.random(),
//             title: newItem,
//             done: false,
//         }

//         setShoppingList(prevState => [...prevState, newShoppingItem])

//         setNewItem('')
//     }

//     const itemsElement = shoppingList.map((item, index) => {
//         return (
//             <ShoppingItem item={item} key={index}></ShoppingItem>
//         )
//     })

//     // const markAll = (event) => {
//     //     event.preventDefault()
//     //     console.log('veikia')
//     // }


//     return (
//         <Container>
//             <form>
//                 <input onChange={textInputHandler} type='text' placeholder="add item"></input>
//                 <input onClick={addItem} type='submit' value='add item'></input>
//             </form>
//             {itemsList && itemsList.length > 0
//             (<div className="shopping-list">
//                 <h3>Your shopping list:</h3>
//                     <ul>
//                         <li>

//                         </li>
//                     </ul>
//                     {itemsElement}
//                     {/* <input onClick={markAll} type='submit' value='Mark all done'></input>
//                             <input type='submit' value='Mark all undone'></input> */}
//             </div>
//             )}
//             <div>
//                 <h2>Your shopping list is empty</h2>
//             </div>

//         </Container>
//     )
// }
export default function ShoppingItem( {data, onDelete, onTaskDone}) {
    return (
        <li
            key={data.id}>
            <input onChange={() => onTaskDone(data.id)} type='checkbox'></input>
            <span className={data.done ? 'done' : ''}>{data.title}</span>
            <button onClick={() => onDelete(data.id)}>Delete</button>
        </li>)
}

