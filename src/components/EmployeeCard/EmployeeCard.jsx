import React from 'react'
import "./EmployeeCard.css"

const EmployeeCard = (props) => {
  return (
    <div className='employee'>
      <div className='header'>
        <img src="https://github.com/Mariano-SI.png" alt="Mariano" />
      </div>
      <div className='footer'>
        <h4>Mariano</h4>
        <h5>FullStack Developer</h5>
      </div>
    </div>
  )
}

export default EmployeeCard