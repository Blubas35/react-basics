import React from 'react'

const GetColor = ({ title, onChange, value, optionElement, onOtherChange, otherValue }) => {
    return (
        <div className="form-control">
            <label htmlFor='color'>{title}</label>
            <select
                name='color'
                onChange={onChange}
                value={value}>
                {optionElement}
            </select>
            {value === 'other' &&
                <input
                    name="other"
                    type='text'
                    onChange={onOtherChange}
                    value={otherValue}
                    placeholder='Enter Your color'
                ></input>}
        </div>
    )
}

export default GetColor