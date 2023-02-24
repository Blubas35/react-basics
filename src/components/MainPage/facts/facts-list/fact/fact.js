import './fact.css'

export default function FactItem(props) {
    return(
        <li className="facts-item">
          <div className="fact-value">{props.value}</div>
          <div className="fact-description">{props.text}</div>
        </li>
    )
}