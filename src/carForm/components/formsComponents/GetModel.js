

export default function GetModel({ onChange, value }) {
    return (
        <div className="form-control">
            <label htmlFor='model'>Type your model</label>
            {/* <select>{modelArr}</select> */}
            <input
                onChange={onChange}
                value={value}
                name="model"
                type='text' />
        </div>
    )
}