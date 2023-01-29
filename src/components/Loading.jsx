import React from 'react'
import '../styles/Loading.css'

function Loading() {
  return (
    <div className="lds-ring-container center">
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

  )
}

export default Loading