import FactItem from "./fact/fact"
import './facts-list.css'

export default function FactsList(props) {
    const factItemElement = props.info.map((prop, index) => {
       return <FactItem
        value= {prop.value}
        text= {prop.text}
        key={index}
        />
    }
    )
    return (
        <ul className="facts-list">
            {factItemElement}
        </ul>
    )
}