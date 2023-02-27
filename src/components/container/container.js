import './container.css'


export default function Container(props) {
    let classes = 'container ' + props.className
    return (
        <div className={classes}>{props.children}</div>
    )
}