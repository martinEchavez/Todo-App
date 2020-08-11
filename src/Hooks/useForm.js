import React, { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {
        const value = target.name === 'state' ? target.checked : target.value;
        const name = target.name;
        setValues({
            ...values,
            [name] : value
        })
    }
    return [ values, handleInputChange, reset ]
}