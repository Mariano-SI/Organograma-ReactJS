import React from 'react'
import "./Select.css"

const Select = (props) => {
  return (
    <div className='listaSuspensa'>
      <label >{props.label}</label>
      <select onChange={ e =>props.setValue(e.target.value)} value={props.value}>
        {props.itens.map((item)=>(
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default Select