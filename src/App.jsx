import { useState } from 'react'
import './App.css'
import Create from './components/create'
import Update from './components/Update'
import Read from './components/Read'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className='App'>
      <h1>CRUD IMPLEMENTATION</h1>
      <h3>using react-router-dom</h3>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/users" element={<Read />}></Route>
          <Route exact path="/create-user" element={ <Create /> }></Route>
          <Route exact path="/edit-user" element={ <Update /> }></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
