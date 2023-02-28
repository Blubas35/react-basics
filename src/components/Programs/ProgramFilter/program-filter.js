import './program-filter.css'
import FormControl from './from-control/form-control'
import TimeSelect from './from-control/time-select'

export default function ProgramFilter(props) {
    const optionDataArr = props.info
    const selectDataArr = props.timeSelect

    const selectElement = optionDataArr.map((option, index) => {
        return <FormControl
            title={option.title}
            option1={option.option1}
            option2={option.option2}
            option3={option.option3}
            option4={option.option4}
            key={index}
        />
    })
    const checkBox = selectDataArr.map((element, index) => {
        return <TimeSelect
        title={element.title}
        checkBox1={element.checkBox1}
        checkBox2={element.checkBox2}
        key={index}
        />
    })

    return (
        <div className="program-filter">
            <form className="program-filter-form">
                <span className="programs-found">{props.title}</span>
                {selectElement}
                {checkBox}
                <button type="reset">{props.buttonText}</button>
            </form>
        </div>
    )
}