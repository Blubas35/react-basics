
export default function FormControl(props) {
    return (
        <div className="form-control">
                <label htmlFor="course-select">{props.title}</label>
                <select id="course-select">
                    <option>{props.option1}</option>
                    <option>{props.option2}</option>
                    <option>{props.option3}</option>
                    <option>{props.option4}</option>
                </select>
            </div>
    )
}