import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'
import Container from '../components/container/container'

const RandomApi = () => {

    const [activity, setActivity] = useState('')
    const [categories, setCategories] = useState([])
    const [participants, setParticipants] = useState('')
    const [activityPrice, setActivityPrice] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const typeOfCategories = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
    const participantsArr = [1, 2, 3, 4, 5, 6, 7, 8]

    useEffect(() => {
        fetch('http://www.boredapi.com/api/activity/')
            .then(res => res.json())
            .then(data => {
                setActivity(data.activity)
            })
    }, [])

    const formSubmitHandler = (event) => {
        event.preventDefault()
        console.log(event.target.minPrice.value)
        const minPrice =  event.target.minPrice.value / 10
        const maxPrice = event.target.maxPrice.value / 10
        setErrorMsg('')

        fetch(`http://www.boredapi.com/api/activity?type=${event.target.categories.value}&participants=${event.target.participants.value}&minprice=${minPrice}&maxprice=${maxPrice}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setErrorMsg(data.error)
                } else{
                    setActivity(data.activity)
                    setCategories(data.type)
                    setParticipants(data.participants)
                    setActivityPrice(data.price)
                }

            })
    }

    const randomActivityHandler = (event) => {
        event.preventDefault()
        setErrorMsg('')
        fetch('http://www.boredapi.com/api/activity?')
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setErrorMsg(data.error)
                    return
                } else {
                    setActivity(data.activity)
                    setCategories(data.type)
                    setParticipants(data.participants)
                    setActivityPrice(data.price)
                }
                
            })
        
        }

    const firstLetterUpperCase = word => word[0].toUpperCase() + word.slice(1)
    return (
        <Container>
            <>
                <form onSubmit={formSubmitHandler}>
                    <label>What category?</label>
                    <select name='categories'>
                        {typeOfCategories.map((category, index) => <option key={index} value={category}>{firstLetterUpperCase(category)}</option>)}
                    </select>
                    <label htmlFor='participants'>How many participants?</label>
                    <select name='participants'>
                        {participantsArr.map((participant, index) => <option key={index} value={participant}>{participant}</option>)}
                    </select>
                    <label htmlFor='mixPrice'>What price range?(min,max)</label>

                    <input name='minPrice' type='number' min='1' max='8' defaultValue='1'></input>
                    <input name='maxPrice' type='number' min='1' max='10' defaultValue='10'></input>
                    <button style={{ width: '20%' }}>Click to get activity!</button>
                </form>
                <button onClick={randomActivityHandler} style={{ width: '20%' }}>I am feeling lucky!</button>

            </>

            {errorMsg && errorMsg.length > 0 ? (
                <div>{errorMsg}</div>
            ) : (
                <div>
                    <div>Activity to do: {activity}</div>

                    {categories && categories.length > 0 && (
                        <div>Activity type: {firstLetterUpperCase(categories)}</div>
                    )}
                    <div>Participants required: {participants}</div>
                    <div>Price range: {activityPrice * 10}</div>
                </div>

            )}
        </Container>
    )
}

export default RandomApi