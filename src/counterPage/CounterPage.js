import { useState } from "react"
import './CounterPage.css'

import Container from "../components/container/container"

const Counter = () => {
    const initialCount = 5
    const [count, setCount] = useState(initialCount)
    const [grades, setGrades] = useState([])

    const changeCountHandler = (amount) => setCount(prevState => prevState + amount)

    let classes = ''

    if (count > 5) {
        classes = 'green'
    }
    if (count < 5) {
        classes = 'red'
    }

    const inputElementHandler = (event) => {
        let newValue = parseInt(event.target.value)
        setCount(newValue)
        if (newValue > 10) {
            setCount(10)
        } else if (newValue < 0) {
            setCount(0)
        }
    }

    const addGradeHandler = () => {
        const gradeData = {
            id: Math.random(),
            number: count,
        }

        setGrades(prevState => [gradeData, ...prevState])
        setCount(initialCount)
    }
    // const removeElement = (indexToDelete) => {
    //     setSaveCount((prevNumber) => prevNumber.filter((count, index) => index != indexToDelete))
    // } infinite loop
    const removeElement = (id) => setGrades(prevState => prevState.filter(grade => grade.id !== id))

    return (
        <Container>
            <h1 className={classes}>{count}</h1>
            <input
                min={1}
                max={10}
                onChange={inputElementHandler}
                // onChange={(event) => inputElementHandler(event)} nebutina naudoti event
                value={count}
                type="number"
            />
            <button onClick={() => changeCountHandler(1)} disabled={count > 9}
            >+1</button>
            <button onClick={() => changeCountHandler(-1)} disabled={count < 1}>-1</button>
            <button onClick={() => changeCountHandler(2)} disabled={count > 8}>+2</button>
            <button onClick={() => changeCountHandler(-2)} disabled={count < 2}>-2</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => addGradeHandler()}>Save</button>

            {grades && grades.length > 0 &&
                <div className="numbers-wrapper">
                    <h2>Saved Numbers: </h2>
                    <ul>
                        {grades.map((grade) =>
                            <li key={grade.id}>
                                {grade.number}
                                <button onClick={() => removeElement(grade.id)} >x</button>
                            </li>)}
                    </ul>
                </div>
            }
        </Container>
    )
}
export default Counter