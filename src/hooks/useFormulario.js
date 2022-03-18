import React, { useState } from 'react'

//custom hook

export const useFormulario = (initialState = {}) => {

    const [inputs, setImputs] = useState(initialState)

    const handleChange = e => {
        const { name, value, checked, type } = e.target
  
        setImputs((old) => ({
          ...old,
          [name]: type === "checkbox" ? checked : value
        }));
    };

    const reset = () => {
        setImputs(initialState)
    }

  return [inputs, handleChange, reset]
}
