import React from 'react'
import "./EmployeeCard.css"
const EmployeeCard = ({name,role,image,headerColor}) => {

  console.log()
  return (
    <div className='employee'>
      <div className='header' style={{backgroundColor:`${headerColor}`}}>
        <img src={image? image: "/images/perfil.png"} alt={`${name}`} />
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  )
}

export default EmployeeCard