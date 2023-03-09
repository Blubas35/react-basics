import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Container from '../components/container/container'

const GenderizeApi = () => {

    let { name } = useParams()

    const [getName, setGetName] = useState('')
    const [getGender, setGetGender] = useState('')
    const [probability, setProbability] = useState('')
    const [country, setCountry] = useState('')
    const [countryProbability, setCountryProbability] = useState('')

    let namesArr = ["John", "Domantas", "Benediktas", "Guste", "hayle", "Gitanas", "Lebron"]

    useEffect(() => {
        fetch(`https://api.genderize.io?name=${name}`)
            .then(res => res.json())
            .then(data => {
                setGetName(data.name)
                setGetGender(data.gender)
                setProbability(data.probability)
            })
    }, [name])

    useEffect(() => {
        fetch(`https://api.nationalize.io?name=${name}`)
            .then(res => res.json())
            .then(data => {

                const countriesObj = data.country

                setCountry(countriesObj[0].country_id)
                setCountryProbability(countriesObj[0].probability)

            })
    }, [name])

    return (
        <Container>
            {namesArr && namesArr.length > 0 && (
                namesArr.map((name, index) => {
                    return <div
                        key={index}
                    >
                        <NavLink to={'/other-projects/genderize-api/' + name} >
                            {name}
                        </NavLink>
                    </div>
                })
            )}

            {name && name.length > 0 && (
                <>
                    <div>Name: {getName}</div>
                    <div>Gender: {getGender}</div>
                    <div>Gender probability: {probability} </div>
                    <div>
                        <span>Names origin of country: </span>
                        <NavLink to={'/other-projects/bitcoin-api'}>
                            {country}
                        </NavLink>
                    </div>
                    <div>Country probability: {Math.round(countryProbability * 100)}%</div>
                </>
            )}
        </Container>
    )
}

export default GenderizeApi