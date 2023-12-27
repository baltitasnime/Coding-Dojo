import { useState } from 'react'
import {
  Routes, Route , Navigate
} from 'react-router-dom'

// import './App.css'
import Home from './components/home'
import Footer from './components/footer'
import Content from './components/Content'

function App() {
  return (
    <>
    <div>
    <Routes>
      <Route path='/' element={<Navigate to={'/home'}/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/:num" element={<Content />}/>
      <Route path="/:hello/:col1/:col2" element={<Footer />}/>
  </Routes>
  </div>
    </>
  )
}

export default App
