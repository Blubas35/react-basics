

export default function SmolButton(props) {
    return props.text && (
        <a className="button" href={props.url}>{props.text}</a>
    )
}