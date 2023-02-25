import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import './Squad.css'
//name,role,image,squad
const Squad = (props) => {
  console.log(props)
  return (

    props.employees.length>0?
    <section className='squad' style={{backgroundColor:props.secondaryColor}}>
      <h3 style={{borderBottom:`4px solid ${props.primaryColor}`}}>{props.name}</h3>
      <div className='employeesContainer'>
        {props.employees.map((employee)=>(
          <EmployeeCard key={employee.name}name={employee.name} role={employee.role} image={employee.image} headerColor={props.primaryColor}/>
        ))}
      </div>    
    </section> : ''
  )
}

export default Squad