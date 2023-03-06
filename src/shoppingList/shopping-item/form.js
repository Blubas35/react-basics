
export default function GenerateForm({ onFormSubmit, item, onItemChange }) {
    return (
        <form onSubmit={onFormSubmit}>
            <div className="control-form">
                <label htmlFor="shopping-item-input">Shopping item:</label>
                <input type='text' id='shopping-item-input' value={item} onChange={onItemChange}></input>
            </div>
            <input type='submit'></input>
        </form>
    )
}