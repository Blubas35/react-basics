import React from 'react'

const GetBasePrice = ({ onChange, value }) => {
    return (
        <div className="form-control">
            <label htmlFor='cost'>Base price</label>
            <input
                onChange={onChange}
                value={value}
                name="cost"
                type='number'
                min='0'
                step='50' />
        </div>
    )
}

export default GetBasePrice