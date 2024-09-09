import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EditEmployeePage from './pages/EditEmployeePage'
import './App.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditEmployeePage />} />
      </Routes>
    </Router>
  )
}

export default App
