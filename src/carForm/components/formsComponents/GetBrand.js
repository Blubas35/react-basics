
export default function GetBrand({ onChange, data, name, brandArr }) {
    return (
        <div className="form-control">
            <label htmlFor='brand'>Type your brand</label>
            <select
                onChange={onChange}
                value={data}
                name={name}
            >{brandArr}</select>
        </div>
    )
}