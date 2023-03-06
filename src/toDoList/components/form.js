

export default function GenerateForm({ taskValue, descriptionValue, onFormSubmit, onTaskChange, onDescriptionChange }) {
    return (
        <form onSubmit={onFormSubmit}>
        <h1>To do list</h1>
        <div className='control-form'>
            <label htmlFor='task'>Write your task:</label>
            <input type='text' id='task' value={taskValue} onChange={onTaskChange}></input>
            {/* <select id='select'>{optionElement}</select> */}
        </div>
        <div className='control-form'>
            <label htmlFor='description'>Task description</label>
            <input type='text' id='description' value={descriptionValue} onChange={onDescriptionChange}></input>
        </div>
        <div className='control-form'>
            <label htmlFor='deadline'>Enter deadline date</label>
            <input type='text' id='deadline' ></input>
        </div>

        <input type='submit'></input>
    </form>
    )
}