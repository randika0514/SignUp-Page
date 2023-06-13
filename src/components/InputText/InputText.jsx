import React, { useState } from 'react'
import './inputText.css'

const InputText = (props) => {

    const [focused,setFocused] = useState(false);

    const {label, errorMessege, onChange, id, ...inputProps} = props;

    const handleFocus = (e)=> {
        setFocused(true)
    };

  return (
    <div className='inputText'>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} required onBlur={handleFocus} onFocus={() =>inputProps.name ==="confirmPassword" && setFocused(true)} focused={focused.toString()}/>
        <span>{errorMessege}</span>
    </div>
  )
}

export default InputText