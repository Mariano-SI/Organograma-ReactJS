import React from 'react'
import './Squad.css'
const Squad = (props) => {
  return (
    <section className='squad' style={{backgroundColor:props.secondaryColor}}>
      <h3 style={{borderBottom:`4px solid ${props.primaryColor}`}}>{props.name}</h3>
  </section>
  )
}

export default Squad