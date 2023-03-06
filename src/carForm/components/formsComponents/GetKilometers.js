import React from 'react'

const GetKilometers = ({ onChange, value, title }) => {
    return (
        <div className="form-control">
            <label htmlFor='kilometers'>{title}</label>
            <input
                onChange={onChange}
                value={value}
                name="kilometers"
                type='number'
                min='0'
                step='5000' />
        </div>
    )
}

export default GetKilometers