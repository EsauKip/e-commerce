import React from 'react'
import './App.css'
import Home from './component/Home'
import NavBar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './component/Products'
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </>
  )

}

export default App