import React from 'react'
import './TextInput.css'

const TextInput = (props) => {
  function onDigit(e){
    props.setValue(e.target.value)
  
  }
  return (
    <div className='campoTexto'>
      <label>{props.label}</label>
      <input onChange={onDigit} value={props.value}type="text" placeholder={props.placeholder} required={props.required}/>
    </div>
  )
}

export default TextInput