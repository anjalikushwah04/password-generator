import React from 'react'
import { useState } from "react";

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    return [ values,
        (e) => {
            setValues({
                ...values, [e.target.name]:e.target.type==="checkbox"?e.target.checked:e.target.value,
            })
        } 
  ]
}

export default useForm;
