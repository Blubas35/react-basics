

export default function TimeSelect(props) {
    
    if(!props.checkBox1 && !props.checkBox2) {
        return
    }

    return (
        <fieldset id="time-select">
            <legend>{props.title}</legend>
            { (props.checkBox1) && (<div className="form-control checkbox">
                <input type="checkbox" id="time-variation-1" />
                <label htmlFor="time-variation-1">{props.checkBox1}</label>
            </div>)
            }

            {(props.checkBox2) && (< div className="form-control checkbox">
            <input type="checkbox" id="time-variation-2" />
            <label htmlFor="time-variation-2">{props.checkBox2}</label>
        </div>)
        }
            
    </fieldset >
    )
}