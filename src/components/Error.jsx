import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/error.png'
import '../styles/Error.css'

function Error() {
  return (
    <div className='quiz--container quiz--error center'>
        <div className="quiz--error-text">
            <div className="quiz--title">404 !!</div>
            <div className="quiz--subtitle">Oops! You're beyond the borders</div>
            <div className="quiz--subtitle quiz--error-para">The page you're looking for no longer exits.</div>
            <div className="quiz--subtitle quiz--error-para">
                Return to the <Link to="/">home page</Link> and remember: you haven't seen anything
            </div>
        </div>
        <div className="quiz--error-img">
            <img src={image} alt="" />
        </div>
        
    </div>
  )
}

export default Error