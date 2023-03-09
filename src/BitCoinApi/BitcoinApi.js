import React, { useEffect, useState } from 'react'
import Container from '../components/container/container'

const BitcoinApi = () => {
    const [cryptoName, setCryptoName] = useState('')
    const [priceUSD, setPriceUSD] = useState('')
    const [priceEUR, setPriceEUR] = useState('')
    const [priceGBP, setPriceGBP] = useState('')
    const [updatedTime, setUpdatedTime] = useState('')

    useEffect(() => {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
            .then(res => res.json())
            .then(data => {
                setCryptoName(data.chartName)
                setPriceUSD(data.bpi.USD.rate)
                setPriceEUR(data.bpi.EUR.rate)
                setPriceGBP(data.bpi.GBP.rate)
                setUpdatedTime(data.time.updated)
            })
    })
    return (
        <Container>
            
            <h1>{cryptoName} current price</h1>
            <div>
                <ul>
                    <li>Price in USD: {priceUSD} </li>
                    <li>Price in EUR: {priceEUR} </li>
                    <li>Price in GBP: {priceGBP} </li>
                    <li>Time price was updated: {updatedTime}</li>
                </ul>
            </div>
        </Container>
    )
}

export default BitcoinApi