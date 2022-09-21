import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Apropos from '../pages/Apropos'
import Error from '../pages/Error'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/apropos" element={<Apropos />}></Route>
          <Route path="/error404" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
