import FactItem from "./fact/fact"
import './facts-list.css'

export default function FactsList() {
    return (
        <ul className="facts-list">
            <FactItem 
            value='1298'
            text ='Šiuo metu mokosi studentų'
            ></FactItem>
            <FactItem 
            value='4762'
            text ='Viso baigė studentų'
            ></FactItem>
            <FactItem 
            value='80%'
            text ='Baigę Pažengusių studijas įsidarbino'></FactItem>
            <FactItem 
            value='Front-End'
            text ='Populiariausia programa'
            ></FactItem>
        </ul>
    )
}