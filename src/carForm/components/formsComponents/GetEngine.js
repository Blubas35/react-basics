import React from 'react'

const GetEngine = ({ onChange, value, optionElement }) => {
    return (
        <div className="form-control" >
            <label htmlFor='engine-type'>Select your engine type</label>
            <select onChange={onChange}
                value={value}
                name="engine-type">
                {optionElement}
            </select>
        </div >
    )
}

export default GetEngine