import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Final.css'

function Final() {
  const data = JSON.parse(localStorage.getItem('initialState'));


  return (
    <div className="quiz--container center quiz--final-container">
      <div className="quiz--final-title">Final Score : {data.score + 1}</div>
      <Link className='quiz--btn center' to="/">Back to Home</Link>
    </div>
  )
}

export default Final