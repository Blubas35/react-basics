import { useState } from "react"
import './CounterPage.css'

import Container from "../components/container/container"

const Counter = () => {
    // nereikia selectinti is naujo

    // const buttonElement = document.querySelector('button')
    // buttonElement.addEventListener('click', () => {

    // })

    // prideti classe <4 red >6zalia
    // sutrumpinti apjungti funkcijas

    const initialCount = 5

    // const [isActive, setActive] = useState()
    const [count, setCount] = useState(initialCount)


    const changeCount = (amount) => {
        let newCount = count + amount
        setCount(newCount)

        // if(newCount < 5) {
        //     setActive(false)
        // }
        // if(newCount > 5) {
        //     setActive(true)
        // }
    }
    let classes = ''
    if ( count > 5) {
        classes = 'green'
    }
    if (count < 5) {
        classes = 'red'
    }
    // let classes = count > 4 ? 'green' : 'red' 

    const buttonDisabler = (disable) => {
        if (disable) {
            return true
        } else {
            return null
        }
    }

    return (
        <Container>
            <h1 className={classes} >{count}</h1>
            {/* <h1 className={isActive ? 'green' : 'red'} >{count}</h1> */}
            <button onClick={() => changeCount(+1)} disabled={count > 9 ? true : null}
            >+1</button>
            <button onClick={() => changeCount(-1)} disabled={count < 1 ? true : null}>-1</button>
            <button onClick={() => changeCount(+2)} disabled={count > 8 ? true : null}>+2</button>
            <button onClick={() => changeCount(-2)} disabled={count < 2 ? true : null}>-2</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
        </Container>
    )
}
export default Counter