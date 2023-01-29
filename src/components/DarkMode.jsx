import { useState } from 'react'
import '../styles/DarkMode.css'

function DarkMode() {
  const [theme, setTheme] = useState("dark-mode");

  const handleClick = () => {
    document.body.className = theme;
    setTheme(
        prevTheme => prevTheme === "light-mode" ? "dark-mode" : "light-mode"
    )
  }

  const btnText = theme === "dark-mode" ? "darkmode" : "lightmode"

  return (
    <div className="darkMode">
        <button 
            className='quiz--btn'
            onClick={handleClick}
        >
           {btnText}
        </button>
    </div>
  )
}

export default DarkMode