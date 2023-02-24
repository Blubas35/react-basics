import './LargeButton.css'
import '../ArrowIcons'
import ArrowIcon from '../ArrowIcons'

export default function LargeButton(props) {
    return props.text && (
        <a className="button-title" href={props.url}>{props.text}
        
        <ArrowIcon></ArrowIcon>
        </a>


    )
}