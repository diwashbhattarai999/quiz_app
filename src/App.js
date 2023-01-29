import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home, Question, Final, Setting} from './pages'
import { DarkMode } from './components'
import './styles/App.css'
import './styles/root.css'

function App() {


  return (
    <Router>
        <DarkMode />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/setting" element={<Setting />} />
            <Route path="/question" element={<Question />}/>
            <Route path="/final" element={<Final />}/>
        </Routes>
    </Router>
  )
}

export default App
