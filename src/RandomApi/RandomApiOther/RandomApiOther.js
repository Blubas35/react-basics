import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Container from '../../components/container/container'

const RandomApiOther = () => {

    let { category } = useParams()

    const [activity, setActivity] = useState('')
    const [type, setType] = useState('')
    const [participants, setParticipants] = useState('')

    const categoriesArr = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

    useEffect(() => {
        fetch(`http://www.boredapi.com/api/activity?type=${category}`)
            .then(res => res.json())
            .then(data => {
                setActivity(data.activity)
                setType(data.type)
                setParticipants(data.participants)
            })
    }, [category])
    console.log(category)
    const firstLetterUpperCase = word => word[0].toUpperCase() + word.slice(1)

    return (
        <Container>
            {categoriesArr.map((category, index) =>
                <div
                    className='categories-item'
                    key={index}
                >
                    <NavLink to={'/other-projects/boredOther-api/' + category}>
                        {firstLetterUpperCase(category)}
                    </NavLink>
                </div>
            )}
            {type && type.length > 0 && (
                <>
                    <div>Random activity: {activity}</div>
                    <div>Activity type: {type}</div>
                    <div>Participants required: {participants}</div>
                </>

            )}

        </Container>
    )
}

export default RandomApiOther