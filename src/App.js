import React from 'react'
import './App.css'
import Home from './component/Home'
import NavBar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './component/Products'
import Product from './component/Product'
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
      </Routes>
    </>
  )

}

export default App