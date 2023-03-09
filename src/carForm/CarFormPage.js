import Container from "../components/container/container";
import { useState } from "react";
import GenerateCar from "./components/resultsWrapper";
import GetForm from "./components/form";
import GetBrand from "./components/formsComponents/GetBrand";
import GetModel from "./components/formsComponents/GetModel";
import GetEngine from "./components/formsComponents/GetEngine";
import GetBasePrice from "./components/formsComponents/GetBasePrice";
import GetKilometers from "./components/formsComponents/GetKilometers";
import GetColor from "./components/formsComponents/GetColor";

export default function CarForm() {
    const car = [
        {
            brand: 'brandas',
            model: 'modelis',
            engineType: 'diesel',
            kilometers: 1000000,
            color: 'black',
            price: {
                baseCost: 1000,
                // mileageDiscount: discountMileage(),
                // enginePrice: additionalEngineCost(),
                // colorPrice: additionalColorCost(),
                // vat: getVAT(),
                // finalPrice: getFinalPrice(),
            }
        },
        {
            brand: 'brandas2',
            model: 'modelis2',
            engineType: 'petrol',
            kilometers: 50000,
            color: 'blue',
            price: {
                baseCost: 5000,
                // mileageDiscount: discountMileage(),
                // enginePrice: additionalEngineCost(),
                // colorPrice: additionalColorCost(),
                // vat: getVAT(),
                // finalPrice: getFinalPrice(),
            }
        }
    ]

    const carBrand = [
        {
            brand: 'Mazda',
            model: ['3', '6', 'cx-5']
        },
        {
            brand: 'Mitsubshi',
            model: ['Lancer', 'Evolution', 'Eclipse']
        },
        {
            brand: 'Honda',
            model: ['Civic', 'HR-V', 'Accord']
        }

    ]
    const colorArr = ['juoda', 'raudona', 'mėlyna', 'sidabrinė', 'balta', 'special blue', 'other']
    const enginesArr = ['electric', 'diesel', 'petrol', 'hybrid']

    const carsArr = carBrand.map((car, index) => {
        const brand = car.brand
        return (
            <option key={index} value={brand}>{brand}</option>
        )
    })
    const [createdCar, setCreatedCar] = useState()
    const [brand, setBrand] = useState('brandas') /*cia reikia sutvarkyti kad butu default value nezinau kaip*/
    const [model, setModel] = useState('modelis')
    const [engineType, setEngineType] = useState(enginesArr[0])
    const [baseCost, setBaseCost] = useState(1000)
    const [kilometers, setKilometers] = useState(5000)
    const [color, setColor] = useState(colorArr[0])
    const [otherColor, setOtherColor] = useState('')
    const [discount, setMileageDiscount] = useState(0)

    const optionElement = (data) => {
        const elements = data.map((element, index) => {
            const optionText = element[0].toUpperCase() + element.slice(1)

            return (<option key={index} value={element}>{optionText}</option>)
        })
        return elements
    }

    const additionalEngineCost = () => {
        if (engineType == 'electric') {
            return 10000
        } else if (engineType == 'hybrid') {
            return 7500
        } else if (engineType == 'diesel') {
            return 5000
        } else {
            return baseCost
        }
    }

    const discountMileage = () => {
        if (kilometers > 500000) {
            return baseCost * 0.5
        }
        if (kilometers > 100000) {
            return baseCost * 0.7
        }
        if (kilometers > 50000) {
            return baseCost * 0.8
        }
        if (kilometers > 20000) {
            return baseCost * 0.85
        }
        if (kilometers > 0) {
            return baseCost * 0.9
        }
        return 0
    }

    const getVAT = () => {
        return baseCost * 0.21
    }

    const additionalColorCost = () => {
        if (color == 'special blue') {
            return 500
        }
        if (color == 'other') {
            return 3000
        } else {
            return 0
        }
    }
    const getFinalPrice = () => additionalColorCost() + additionalEngineCost() + baseCost
    const getDiscountedPrice = () => getFinalPrice() - discountMileage()
    const totalPriceWithVAT = () => getDiscountedPrice() + getVAT()


    const handleBrand = (event) => {
        let brandType = event.target.value
        setBrand(brandType)
    }
    const handleModel = (event) => {
        let modelType = event.target.value
        setModel(modelType)
    }
    const handleEngineType = (event) => {
        let engineTypeElement = event.target.value
        setEngineType(engineTypeElement)
    }
    const handleBaseCost = (event) => {
        let baseCost = event.target.value
        setBaseCost(baseCost)
    }
    const handleKilometers = (event) => {
        let kilometersElement = event.target.value
        setKilometers(kilometersElement)
    }
    const handleColor = (event) => {
        let colorElement = event.target.value
        setColor(colorElement)
    }
    const handleOtherColor = (event) => {
        setOtherColor(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()

        const newCar = {
            brand,
            model,
            engineType,
            kilometers,
            color,
            otherColor,
            price: {
                baseCost,
                mileageDiscount: discountMileage(),
                enginePrice: additionalEngineCost(),
                colorPrice: additionalColorCost(),
                discountedPrice: getDiscountedPrice(),
                vat: getVAT(),
                finalPrice: getFinalPrice(),
                finalPriceVAT: totalPriceWithVAT(),
            }
        }
        setCreatedCar(newCar)

        // setCreatedCar(prevState => [newCar, ...prevState])
    }

    return (
        <Container>
            <form onSubmit={submitHandler}  >
                <h1>Create Your Car!</h1>
                <GetBrand
                    onChange={handleBrand}
                    data={brand}
                    name='brand'
                    brandArr={carsArr}
                ></GetBrand>

                <GetModel
                    onChange={handleModel}
                    value={model}
                ></GetModel>

                <GetEngine
                    onChange={handleEngineType}
                    value={engineType}
                    optionElement={optionElement(enginesArr)}
                ></GetEngine>

                <GetBasePrice
                    onChange={handleBaseCost}
                    value={baseCost}
                ></GetBasePrice>

                <GetKilometers
                    onChange={handleKilometers}
                    value={kilometers}
                    title='Type your kilometers'
                ></GetKilometers>

                <GetColor
                    title='Type your preferred color'
                    onChange={handleColor}
                    value={color}
                    optionElement={optionElement(colorArr)}
                    onOtherChange={handleOtherColor}
                    otherValue={otherColor}
                ></GetColor>

                {brand && model && engineType && baseCost && kilometers && color &&
                    (<input type="submit" value='Submit' ></input>)}
            </form>
            {createdCar && (
                <GenerateCar data={createdCar}></GenerateCar>
            )}
        </Container>
    )
}